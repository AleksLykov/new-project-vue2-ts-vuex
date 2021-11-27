const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  chainWebpack(config) {
    config.resolve.alias.delete('@');
    config.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin);
  },
  transpileDependencies: ['vuetify', 'sanitize-html'],
  publicPath: '/',
  outputDir: './build',

  devServer: {
    port: 8082,
    before(app) {
      app.get('/web-ui-settings.json', (req, res) => {
        const webUiSettingDefault = {
          baseRoot: 'http://example.ru',
          baseUrl: 'http://example.ru/api/common/',

          authEnabled: true,
        };
        res.json({ ...webUiSettingDefault });
      });
    },
  },

  css: {
    loaderOptions: {
      sass: {},
      scss: {},
    },
  },
  configureWebpack: {
    plugins: [new MomentLocalesPlugin({ localesToKeep: ['ru'] })],
  },
};
