const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: `dist/${name}.style.min.css`,
});

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
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: ['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader'],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [extractSass],
  devServer: {
    contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
    port: '8000',
  },
};
