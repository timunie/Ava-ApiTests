function webpackConfigPlugin(context, options) {
  return {
    name: 'webpack-config',
    configureWebpack(config, isServer, utils, content) {
	  config.optimization.removeAvailableModules = false;
      config.optimization.removeEmptyChunks = false;
      config.optimization.splitChunks = false;
	  config.output.pathinfo = false;
    },
  };
}

module.exports = webpackConfigPlugin;
