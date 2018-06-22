const path = require('path');

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FlatContextPlugin = require('./src/plugin/FlatContextPlugin')

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
        new FlatContextPlugin(
            '/feature',
            path.resolve(__dirname, 'example'),
            /\.feature\.js$/
        )
    ]
};
