const path = require('path');
const webpack = require('webpack');
// import webpackHotMiddleware from 'webpack-hot-middleware';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './app/index'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001',
        secure: false,
      }
    }
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, './app/index.html'),
      filename: 'index.html', //指定文件名
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;