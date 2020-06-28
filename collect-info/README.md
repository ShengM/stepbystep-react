## 工程化

### 目标

* 组件化开发
* TypeScript
* Less
* 预览服务和热重载

### 配置

#### package.json

``` json
{
  "scripts": {
    "dev": "webpack-dev-server --config build/webpack.config.dev.js",
    "build": "webpack --config build/webpack.config.prod.js"
  },
  "devDependencies": {
    "@types/react": "^16.9.35",
    "@types/react-dom": "^16.9.8",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.5.3",
    "html-webpack-plugin": "^4.3.0",
    "less-loader": "^6.1.0",
    "style-loader": "^1.2.1",
    "ts-loader": "^7.0.5",
    "typescript": "^3.9.3",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}
```

#### tsconfig

``` json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "sourceMap": true,
    "module": "ES2020", // 支持动态模块import(xxx).then(xxx)
    "target": "ES5",
    "jsx": "react",
    "allowSyntheticDefaultImports": true
  }
}
```

#### webpack base config (基础配置)

``` js
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
```

#### webpack dev config (开发环境配置)

``` js
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
```

#### webpack prod config (生产环境配置)

``` js
const path = require('path');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign(baseConfig, {
	mode: 'production',
	output: {
		filename: 'app.js',
		path: path.resolve(process.cwd(), 'dist'),
	},
});
```

### 代码分割

#### 原理

ES2020动态模块导入

#### 使用方法

1. 使用 `React.lazy` 返回异步渲染的组件
2. 使用 `Suspense` 渲染异步组件
3. 借助 webpack 等工具将组件打包成单独 chunk

``` react
let LazyComponent = React.lazy(() => import('./components/lazyComponent'));

function Main() {
	return (
		<fieldset>
			<legend>Lazy Component</legend>
			<Suspense fallback={<div>The component is loading...</div>}>
				<LazyComponent />
			</Suspense>
		</fieldset>
	);
}
```



