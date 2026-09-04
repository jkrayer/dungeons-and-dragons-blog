export default async function(eleventyConfig) {
  const TAG_PAGE_SIZE = 5;
  const isProductionBuild = process.env.ELEVENTY_RUN_MODE === "build";

  const hiddenTags = new Set([
    "all",
    "nav",
    "post",
    "posts",
    "campaign-home",
    "campaign-entry",
    "campaign",
    "house-rules"
  ]);

  function normalizeTags(tags) {
    if (Array.isArray(tags)) {
      return tags;
    }

    if (tags && typeof tags !== "string" && typeof tags[Symbol.iterator] === "function") {
      return [...tags];
    }

    if (typeof tags === "string") {
      return [tags];
    }

    return [];
  }

  function filterTagList(tags) {
    return normalizeTags(tags).filter((tag) => !hiddenTags.has(tag));
  }

  function slugifyTag(tag) {
    return String(tag)
      .trim()
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // FILTERS
  eleventyConfig.addFilter("firstParagraph", (content) => {
    const paragraphs = content.split(/<\/?p>/).filter(p => p.trim() !== "");
    return paragraphs[0] || "";
  });

  // Preview excerpts can include footnote shortcodes; redirect those anchors to the full post URL.
  eleventyConfig.addFilter("previewParagraph", (content, postUrl = "") => {
    const paragraphs = String(content || "").split(/<\/?p>/).filter((p) => p.trim() !== "");
    const first = paragraphs[0] || "";

    if (!postUrl) {
      return first;
    }

    return first.replace(/href=(["'])#footnote-(\d+)\1/g, (_match, quote, number) => {
      return `href=${quote}${postUrl}#footnote-${number}${quote}`;
    });
  });

  eleventyConfig.addFilter("filterTagList", (tags) => {
    return filterTagList(tags);
  });

  // Exclude draft content from production builds while keeping it visible in dev.
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (isProductionBuild && data?.draft) {
        return false;
      }

      return data?.permalink;
    },
    eleventyExcludeFromCollections: (data) => {
      if (isProductionBuild && data?.draft) {
        return true;
      }

      return data?.eleventyExcludeFromCollections;
    }
  });
  
// COLLECTIONS
  eleventyConfig.addCollection("campaigns", function(collectionApi) {
    return collectionApi
      .getFilteredByTag("campaign-home")
  });

  eleventyConfig.addCollection("campaignEntries", function(collectionApi) {
    return collectionApi
      .getFilteredByTag("campaign-entry")
  });

  eleventyConfig.addCollection("houseRulesVersions", function(collectionApi) {
    return collectionApi
      .getFilteredByTag("house-rules")
      .sort((a, b) => {
        const versionA = a?.data?.houseRulesVersion || "0.0.0";
        const versionB = b?.data?.houseRulesVersion || "0.0.0";

        return versionA.localeCompare(versionB, undefined, {
          numeric: true,
          sensitivity: "base"
        });
      });
  });

  eleventyConfig.addCollection("tagPages", function(collectionApi) {
    const posts = collectionApi.getFilteredByTag("posts");
    const tagMap = new Map();

    posts.forEach((post) => {
      filterTagList(post?.data?.tags).forEach((tag) => {
        const slug = slugifyTag(tag);

        if (!slug) {
          return;
        }

        if (!tagMap.has(slug)) {
          tagMap.set(slug, {
            slug,
            label: tag,
            posts: []
          });
        }

        tagMap.get(slug).posts.push(post);
      });
    });

    const tagPages = [];

    [...tagMap.values()]
      .sort((a, b) => a.label.localeCompare(b.label))
      .forEach((tagData) => {
        const postsForTag = [...tagData.posts].reverse();
        const totalPages = Math.max(1, Math.ceil(postsForTag.length / TAG_PAGE_SIZE));
        const hrefs = Array.from({ length: totalPages }, (_, pageNumber) => {
          if (pageNumber === 0) {
            return `/tags/${tagData.slug}/`;
          }

          return `/tags/${tagData.slug}/page/${pageNumber + 1}/`;
        });

        for (let pageNumber = 0; pageNumber < totalPages; pageNumber += 1) {
          const start = pageNumber * TAG_PAGE_SIZE;
          const pagePosts = postsForTag.slice(start, start + TAG_PAGE_SIZE);

          tagPages.push({
            slug: tagData.slug,
            label: tagData.label,
            pageNumber,
            posts: pagePosts,
            pagination: {
              pageNumber,
              hrefs,
              href: {
                previous: pageNumber > 0 ? hrefs[pageNumber - 1] : null,
                next: pageNumber < totalPages - 1 ? hrefs[pageNumber + 1] : null
              }
            }
          });
        }
      });

    return tagPages;
  });

  // SHORTCODES
  eleventyConfig.addShortcode("footnote", function (number) {
    // let list = "";
    // args.forEach(function (listItem) {
    //   list += "<li>" + listItem + "</li>";
    // });
    // return list;
    return `<sup><a href="#footnote-${number}">${number}</a></sup>`;
  });
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};