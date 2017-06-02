const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const ENTRY = {
  polyfills: './src/js/polyfills.js',
  vendor: './src/js/vendor.js',
  app: './src/js/main.js'
};

module.exports = {
  entry: ENTRY,
  target: 'web',
  resolve: {
    extensions: [' ', '.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['awesome-typescript-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.(js|jsx)?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'] // stage-2 is need it to use ...spreadParameters in redux if not fails
          }
        }],
        exclude: [/node_modules/]
      },
      {
        test: /\.css?$/,
        use: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, '../node_modules/compass-mixins/lib')
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: ['file-loader?name=assets/img/[sha512:hash:base64:7].[ext]']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000&name=/assets/fonts/[sha512:hash:base64:7].[ext]']
      }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
      minChunks: module =>
        // this assumes your vendor imports exist in the node_modules directory
        module.context && module.context.indexOf('node_modules') !== -1
    }),
    new ExtractTextPlugin('assets/css/[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/public/index.html'), // Load athe template that you need
      inject: 'body',
      has: true,
      chunks: ['app', 'vendor', 'polyfills'],
      chunksSortMode: 'dependency'
    })
  ]
};
