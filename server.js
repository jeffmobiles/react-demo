
const webpack = require('webpack');
const express = require('express');

const devMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config');
const compiler = webpack(config);
const app = express();
app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// api mock........

const router = express.Router('/api');
const mockApi = require('./_mock/index');
Object.keys(mockApi).forEach(item => {
  const method = item.split(' ')[0];
  const path = item.split(' ')[1];
  app[method.toLowerCase()](path, mockApi[item])
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));