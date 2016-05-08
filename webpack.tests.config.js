'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  entry: './test/index.js',
  output: {
    path: './dist',
    filename: 'carrying.spec.js',
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
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
  }
}
