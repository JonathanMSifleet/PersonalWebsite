/* eslint-disable @typescript-eslint/no-var-requires */

// runs TypeScript linting on separate process
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  context: __dirname,
  mode: 'production',
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    symlinks: true,
    cacheWithContext: false,
  },
  output: {
    asyncChunks: true,
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    chunkFilename: '[id].[chunkhash].js',
  },
  target: 'node',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [[/node_modules/], [/.serverless/], [/.webpack/]],
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
