const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./base.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].map'
  },
  devtool: 'cheap-module-eval-source-map ',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    inline: true,
    historyApiFallback: true,
    stats: 'minimal',
    host: 'localhost',
    port: 9000
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
});
