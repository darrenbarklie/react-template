const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      './app.js',
    ]
  },
  output: { path: __dirname, filename: 'bundle.js' },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
};
