'use strict'

const path = require('path')
const webpack = require('webpack')

const production = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    javascript: [
      'babel-polyfill',
      './src/index',
    ]
  },
  target: 'node',
  output: {
    path: './dist',
    filename: 'carrying.js',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },
  debug: !production,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /(\.spec?)\.ts$/,
        exclude: /node_modules/,
        loaders: [
          'babel?' + JSON.stringify({
            presets: [
              require.resolve('babel-preset-es2015'),
              require.resolve('babel-preset-stage-2'),
            ]
          }),
          'ts',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx'],
    modulesDirectories: ['node_modules', path.resolve('./node_modules')],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"',
      __ROOT_PATH__: '"' + __dirname + '"',
    }),
  ],
};

if (production) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      test: /\.js$/,
    })
  )
} else {
  config.entry.javascript = ['stack-source-map/register', ...config.entry.javascript]
}

module.exports = config
