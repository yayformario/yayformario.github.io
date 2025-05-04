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
	eleventyConfig.setOutputDirectory('output')

	//Copy the entire css directory to '_site'
	//whole directory to minimize the need to pass each file
	eleventyConfig.addPassthroughCopy("src/css/");

	//Grabbing assets as well
	eleventyConfig.addPassthroughCopy('./assets');

};