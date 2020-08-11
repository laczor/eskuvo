const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const { cssFilename, fontFilename } = require('./hashed-asset.config');

const cssLoaders = [CssExtractPlugin.loader, withSourceMap('css-loader'), withSourceMap('postcss-loader')];
const babelInclude = projectPaths('src', 'test');

module.exports = {
	resolve: {
		alias: {
			'src': path.resolve(__dirname, '../src'),
			'test': path.resolve(__dirname, '../test'),
		},
		extensions: ['*', '.js', '.vue', '.json'],
		mainFiles: ['index', 'index.vue'],
	},
	module: {
		rules: [
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.js$/, loader: 'babel-loader', include: babelInclude },
			{ test: /\.css$/, use: cssLoaders },
			{ test: /\.(scss|sass)$/, use: [...cssLoaders, 'resolve-url-loader', withSourceMap('sass-loader')] },
			{ test: /\.(png|jpg)$/, loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images/' } },
			{
				test: /\.woff(2)?$/,
				loader: 'url-loader',
				options: { limit: 10000, mimetype: 'application/font-woff', name: fontFilename },
			},
			{ test: /\.(ttf|eot)$/, loader: 'file-loader', options: { name: fontFilename } },
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new CssExtractPlugin({ filename: cssFilename }),
		new HtmlWebpackPlugin({ template: 'src/index.html', chunksSortMode: 'none' }),
	],
	devtool: 'source-map',
};

function withSourceMap(loader) {
	return { loader, options: { sourceMap: true } };
}

function projectPaths(...rootPaths) {
	const toAbsolute = rootRelative => path.resolve(__dirname, '../', rootRelative);
	return rootPaths.map(toAbsolute);
}
