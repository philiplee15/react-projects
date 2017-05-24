var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module : {
    loaders : [{
      exclude: /node_modules/,
      loader : 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
