var path = require('path');

var config = {
  entry: './demo/src/index.js',
  output: {
    path: path.resolve('demo/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  node: {
    global: true
  }
};

module.exports = config;
