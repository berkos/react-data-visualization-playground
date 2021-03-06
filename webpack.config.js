const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './source/client_chart.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 4000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.csv$/,
        exclude: /node_modules/,
        loader: 'dsv-loader'
      }
    ],
  }
};
