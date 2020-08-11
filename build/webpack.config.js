const path = require('path');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { jsFilename } = require('./hashed-asset.config');
const baseConfig = require('./webpack.base.config');
const DevServerConfig = require('./dev-server.config');
const { config } = require('../package');

const apiPath = process.env.API_PATH || config.default_api_path;
const publicPath = process.env.PUBLIC_PATH || config.default_public_path;
const distPath = path.resolve(__dirname, '../dist');

module.exports = merge(baseConfig, {
	entry: {
		app: './src/main.js',
	},
	output: {
		path: distPath,
		publicPath,
		filename: jsFilename,
	},
	node: false,
	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks: { chunks: 'all' },
	},
	plugins: [
		new CleanWebpackPlugin(),
		new DefinePlugin({
			'process.env.API_PATH': JSON.stringify(apiPath),
			'process.env.PUBLIC_PATH': JSON.stringify(publicPath),
		}),
		...conditionally(process.env.ANALYZE, new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			generateStatsFile: true,
		})),
	],
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	devServer: DevServerConfig({ publicPath, apiPath }),
});

function conditionally(condition, value) {
	return condition ? [].concat(value) : [];
}
