export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/tools": "tools" });
  eleventyConfig.ignores.add("src/tools/**");

  return {
    pathPrefix: "/Grundlagen_Linguistik/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
}
