module.exports = function DevServerConfig({ publicPath = '/', apiPath = '/' } = {}) {
	return {
		historyApiFallback: { index: publicPath },
		publicPath,
		compress: true,
		hot: true,
		port: 3000,
	};
};

