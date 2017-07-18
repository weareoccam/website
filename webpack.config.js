var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: './source/scripts/main.js',
    home: './source/scripts/pages/home.js',
    about: './source/scripts/pages/about.js',
    projects: './source/scripts/pages/projects.js',
  },

  resolve: {
    root: __dirname + '/source/scripts'
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'scripts/[name].js'
  },

  module: {
    loaders: [
      {
        test: /source\/scripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },

  plugins: [
    new Clean(['.tmp']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'scripts/vendor.js',
      minChunks: 2
    }),
    // new BundleAnalyzerPlugin()
  ]
};