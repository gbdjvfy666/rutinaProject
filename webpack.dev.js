const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true,  // Включаем HMR только для разработки
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
