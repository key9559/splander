const path = require('path');

process.env.VUE_APP_VERSION = require('./package.json').version;

const isLocal = String(process.env.VUE_APP_WEB_URL).startsWith('http://');
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: '/web',

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/assets/styles/utility/_function.scss";
          @import "~@/assets/styles/utility/_variable.scss";
          @import "~@/assets/styles/utility/_mixin.scss";
        `,
      },
    },
    sourceMap: process.env.NODE_ENV === 'development',
  },
  pluginOptions: {
    moment: {
      locales: ['en', 'ko'],
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '~@': path.resolve(__dirname, 'src'),
      },
    },
  },
  devServer: isLocal
    ? undefined
    : {
      disableHostCheck: true,
    },
};
