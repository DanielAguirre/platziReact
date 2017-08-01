const path = require("path");
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry :'./server.js',
  output:{
    filename: 'index.js',
    path: path.resolve(__dirname, '../build/server'),
  },
  module:{
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
          presets:['latest-minimal', 'react'],
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
  target:'node',
  plugins: [
    new extractTextPlugin('../statics/styles.css'),
  ],
};