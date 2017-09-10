const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: './public/app.css'
});

module.exports = {
	entry: {
		app: './client/app.js'
	},
	output: {
		publicPath: '/',
		filename: './public/app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js*/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},{
				test: /\.sass$/,
				use: extractSass.extract({
					use: [{
						loader: 'css-loader'
					},{
						loader: 'sass-loader'
					}]
				})
			}
		]
	},
	plugins: [extractSass]
};
