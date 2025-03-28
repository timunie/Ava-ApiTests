function webpackConfigPlugin(context, options) {
  return {
    name: 'webpack-config',
    configureWebpack(config, isServer,{currentBundler}) {
	  config.optimization = {
		moduleIds: 'deterministic' ,
		chunkIds: 'deterministic' ,
		mergeDuplicateChunks: false ,
		concatenateModules : false ,
	  };
    },
  };
}

module.exports = webpackConfigPlugin;
