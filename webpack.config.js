const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');

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
    hot: true
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
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

const compiler = webpack(config);
const express = require('express');
const app = express();
app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.listen(3000, () => console.log('Example app listening on port 3000!'));