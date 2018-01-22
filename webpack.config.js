const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const VENDOR_LIBS = ['react', 'react-dom']
const HtmlWebPackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }, {
        test: /\.(eot|woff|woff2|svg|ttf|png|jpg)([\?]?.*)$/,
        loader: "file-loader"
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader', 'eslint-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack
      .optimize
      .CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      }),
    new HtmlWebPackPlugin({template: './src/index.html'}),
    new FaviconsWebpackPlugin('./styles/images/crown.png'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        debug: false,
        minimize: true,
        sourceMap: true,
        output: {
          comments: false
        },
        compressor: { 
          warnings:true,
          unused: true,
          dead_code: true
        },
        mangle: false
      }
    })

  ],
  devServer: {
    historyApiFallback: true
  }
}

module.exports = config