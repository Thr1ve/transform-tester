/* eslint-disable */

var chalk = require('chalk')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var WebpackEnvPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(process.env.NODE_ENV || 'development'),
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: '/assets'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'},
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
    ]
  },
  resolve:{
    modulesDirectories: ['app', 'node_modules'],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    WebpackEnvPlugin,
    new ProgressBarPlugin({
      format: `building... [${chalk.green(':bar')}] ${chalk.magenta.bold(':percent')} (${chalk.yellow.bold(':elapsed seconds')})`,
      clear: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
