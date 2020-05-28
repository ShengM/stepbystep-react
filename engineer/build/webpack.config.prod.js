const path = require('path');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign(baseConfig, {
	mode: 'production',
	output: {
		filename: 'app.js',
		path: path.resolve(process.cwd(), 'dist'),
	},
});
