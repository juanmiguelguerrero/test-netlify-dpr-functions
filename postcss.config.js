let plugins = [
	require('postcss-import'),
	require('tailwindcss'),
	require('autoprefixer'),
	require('cssnano')
]

// Plugins for development environment
if (process.env.ELEVENTY_ENV === 'development') plugins = [
	require('postcss-import'),
	require('tailwindcss')
]

module.exports = {
	plugins: plugins
}