const {DateTime} = require ('luxon');

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

	//filter for formatting default javascript date
	eleventyConfig.addFilter('postDate', (dateObj) => {
	/*
	TODO: find a way to configure to local timezone
		eleventy by default uses UTC and then convers to local time
		temporary workaround: using EDT in front matter
		# Explicit timezones: -05:00 for EST; -04:00 for EDT
	*/
		return DateTime
			.fromJSDate(dateObj) //convert js date to luxon dateTime
			.toLocaleString(DateTime.DATE_MED); //format to medium-style date
	});
	

};