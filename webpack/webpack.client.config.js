const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../build/client'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /\.css$/],
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2016', 'es2017', 'react'],
           plugins: ['transform-es2015-modules-commonjs']
        }
      },
      {
        test: /\.css$/,
        loader:  extractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: 'css-loader'
        })
      }
    ]
  },
  target:'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    new extractTextPlugin('../client/styles.css'),
  ],
};