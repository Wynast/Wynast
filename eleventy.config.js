import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
	//image plugin
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
	//css
	eleventyConfig.addPassthroughCopy("src/css");
	//url plugin
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	//idek
	// css i think???
	eleventyConfig.addWatchTarget("src/css");
	//idk liquid stuff???
	eleventyConfig.addLiquidFilter("safe", (value) => value);
	eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",

    },
    templateFormats: ["html", "liquid", "md", "njk"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
	pathPrefix: "/"
	
};
};
