const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './app.tsx', // 入口文件
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		// 清理输出目录
		new CleanWebpackPlugin(),
		// 生成Html文件
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
	],
};
