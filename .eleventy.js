const fs = require("fs");
const purgeCssPlugin = require("eleventy-plugin-purgecss");

module.exports = function(eleventyConfig) {

  //plugin
  eleventyConfig.addPlugin(purgeCssPlugin, {
    config: "./purgecss.config.js",
    quiet: false,
  });

  //sass
  eleventyConfig.addWatchTarget("./_src/sass");
  
  //passthrough  
  eleventyConfig.addPassthroughCopy("./_src/favicon");
  eleventyConfig.addPassthroughCopy("./_src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./_src/files");
  eleventyConfig.addPassthroughCopy("./_src/fonts");
  eleventyConfig.addPassthroughCopy("./_src/images");
  eleventyConfig.addPassthroughCopy("./_src/js");
  eleventyConfig.addPassthroughCopy("./_src/libs");

  eleventyConfig.addPassthroughCopy("./_src/robots.txt");
  eleventyConfig.addPassthroughCopy("./_src/sitemap.xml");

  return {
    dir: {
      input: "_src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
  
};
