const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: process.env.ELEVENTY_ENV,
	entry: {
		app: __dirname + '/src/js/main.js',
	},
	output: {
		path: __dirname + '/dist/assets', // `/dist` is the destination
		filename: 'main.js', // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
	},
	module: {
		rules: [
			{
				test: /\.js$/, // rule for .js files
				exclude: /node_modules/,
				loader: "babel-loader" // apply this loader for js files
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}				
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: { 
		alias: { vue: 'vue/dist/vue.esm.js' },
		extensions: ["*", ".js", ".vue", ".json"]
	}
};