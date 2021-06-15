const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		"./src/**/*.html",
		"./src/**/*.njk",
		"./src/**/*.vue",
		"./src/**/*.js",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {},
	plugins: []
}
