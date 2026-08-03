export default {
  layout: "base.njk",
  tags: ["house-rules"],
  permalink: (data) => {
    const version = (data.houseRulesVersion || "0.0.0").replace(/\./g, "-");
    return `/house-rules/version-${version}/`;
  }
};
