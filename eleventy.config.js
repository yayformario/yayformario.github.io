module.exports = async function(eleventyConfig) {
	//Configure eleventy

	/*
	Input Directory
		Order matter
		Must be at top of config file
	*/ 
	eleventyConfig.setInputDirectory("src")

	/*
	Output directory
		default: _site
	*/
	eleventyConfig.setOutputDirectory('public')

	//Copy 'global.css' to '_site'
	eleventyConfig.addPassthroughCopy("./src/global.css");

	//Grabbing assets as well
	eleventyConfig.addPassthroughCopy('./assets');

};