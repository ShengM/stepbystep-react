const path = require('path');
const baseConfig = require('./webpack.config.base');

// 提供开发时的预览服务
module.exports = Object.assign(baseConfig, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		open: true, // 打开浏览器
		port: 17001,
		liveReload: true,
	},
});
