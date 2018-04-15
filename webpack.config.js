const path = require('path');

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const createContextMap = require('./webpack.context-map')

const production = false

module.exports = {
  entry: './src/feature-loader.js',
  mode: production ? 'production' : 'development',
  output: {
    filename: 'feature-loader.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: './dist',
    hot: !production
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin(),
    new webpack.ContextReplacementPlugin(
      /\//,
      path.resolve(__dirname, 'src'),
      createContextMap('./src')
    ),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};