const testPages = require("./videos.11ty.js"); // Import test.11ty.js

module.exports = function(eleventyConfig) {
  console.log("Eleventy is running!"); // Debugging

  eleventyConfig.addCollection("watchPages", function() {
    return require("./videos.11ty.js")();
  });
  

  // Manually add the output from test.11ty.js
  eleventyConfig.addCollection("testPages", () => testPages());

  // Passthrough for images and CSS
  eleventyConfig.addPassthroughCopy("src/images/");
  eleventyConfig.addPassthroughCopy("src/css/");

  // Add a custom Liquid filter for `safe` (optional)
  eleventyConfig.addLiquidFilter("safe", function(content) {
    return content; // Pass content as-is
  });

  return {
    dir: {
      input: "src", // Input directory
      output: "public", // Output directory
    },
  };
};
