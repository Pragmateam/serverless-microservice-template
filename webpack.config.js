const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: slsw.lib.webpack.isLocal ? 'source-map' : false,
  externals: [nodeExternals()],
  target: 'node',
  stats: 'minimal',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.ts', '.js', '.json'],
  },
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  optimization: {
    minimize: slsw.lib.webpack.isLocal ? false : true,
  },
  performance: {
    hints: slsw.lib.webpack.isLocal ? false : 'warning',
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpackCache'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: [/node_modules/, /\.webpack/, /\.webpackCache/, /\.serverless/, /scripts/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
