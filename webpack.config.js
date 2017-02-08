var wepback = require("webpack");
var path = require("path");

module.exports = {

	entry: "./app/App.jsx",

	output: {
		path: "./public",
		filename: "bundle.js"
	},
	resolve: {
		path: "__dirname",
		modulesDirectories: [
			"node_modules",
			"./app/components",
			"./app/api"
		],
		extensions: ["", ".js", ".jsx"]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react", "stage-2"]
				}
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{ 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			}
		]
	}


}