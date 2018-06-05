const path = require('path');

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const createContextMap = require('./webpack.context-map')

module.exports = {
entry: './example/index.js',
    output: {
        filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].js'
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
          template: 'example/index.html'
      }),
      new webpack.ContextReplacementPlugin(
          /[\/\\]/,
          path.resolve(__dirname, 'example'),
          createContextMap('./example')
    )
  ]
};
