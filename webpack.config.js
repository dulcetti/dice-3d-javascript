const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/dice-3d.ts',
  devtool: 'source-map',
  output: {
    filename: 'dice-3d.min.js',
    library: 'Dice3D',
    libraryExport: 'default',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
    port: '8000',
  },
};
