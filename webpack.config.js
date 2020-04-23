const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');

const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: {
		landing: path.resolve(__dirname,'./src/pages/landing/landing.js'),
		ui: path.resolve(__dirname,'./src/ui/ui.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name]/[name].js'
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({ filename: '[name]/[name].css' }),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/pages/landing/landing.pug'),
			filename: './landing/index.html',
			chunks: ['landing'],
			minify: false
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/ui/ui.pug'),
			filename: './ui/index.html',
			chunks: ['ui'], 
			minify: false
		}),
	],

	devServer: {
		contentBase: './dist',
	},

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader'
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options:{
					pretty: true
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',

						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	optimization: {
		minimizer: [new TerserPlugin()],

		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
