const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: 'bundle.[contenthash].js',  // Для продакшна используем хеширование
    path: path.resolve(__dirname, 'dist'),
  },
});
