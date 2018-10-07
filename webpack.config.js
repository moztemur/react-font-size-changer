var path = require('path');
var libraryName = 'react-font-size-resizer';

var config = {
  entry: './src/index',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
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
    }, {
      test: /\.svg$/,
      use: 'babel!svg-react-loader'
    }]
  },
  node: {
    global: false
  }
};

module.exports = config;
