const path = require('path');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign(baseConfig, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		open: true,
		port: 17001,
		liveReload: true,
	},
});
