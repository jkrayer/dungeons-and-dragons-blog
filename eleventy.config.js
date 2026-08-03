export default async function(eleventyConfig) {
  // FILTERS
  eleventyConfig.addFilter("firstParagraph", (content) => {
    const paragraphs = content.split(/<\/?p>/).filter(p => p.trim() !== "");
    return paragraphs[0] || "";
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
  
  // SHORTCODES
  eleventyConfig.addShortcode("footnote", function (number) {
    // let list = "";
    // args.forEach(function (listItem) {
    //   list += "<li>" + listItem + "</li>";
    // });
    // return list;
    return `<sup><a href="#footnote-${number}">${number}</a></sup>`;
  });


console.log(eleventyConfig)

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};