const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      './app.js',
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  watch: true,
  module: {
    loaders: [
      { // JavaScript Loader //
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { // Stylesheet Loader //
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      { // Image Loader //
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      },
      { // Fonts Loader //
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
};
