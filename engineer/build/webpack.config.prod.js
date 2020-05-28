const path = require('path');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign(baseConfig, {
	mode: 'production',
	devtool: 'hide-source-map',
	output: {
		filename: 'app.js',
		path: path.resolve(process.cwd(), 'dist'),
	},
});
