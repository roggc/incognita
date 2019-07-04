const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin= require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const dev=process.env.NODE_ENV==='dev'
const api='http://api.royalty.ga';

module.exports =
{
  entry:'./src/client/client.js',
  module:
  {
    rules:
    [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico|webmanifest)$/,
        use:
        [
          {
            loader: 'file-loader',
            options:
            {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders:
        [
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options:
            {
              modules:true
            }
          },
          'sass-loader'
        ]
      },
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin
    (
      {
        template: './src/assets/index.html'
      }
    ),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin
    (
      {
        __dev__:dev,
        __api__:'\''+api+'\'',
      }
    )
  ],
  resolve:
  {
    modules:
    [
      "node_modules",
      path.resolve("./")
    ],
    extensions: ['.js','.jsx','.css','.scss','.sass','.ico','.png','.webmanifest']
  }
}
