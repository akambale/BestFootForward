const path = require('path');

const SRC_DIR = path.join(__dirname, '/src/client');
const DES_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: ['@babel/polyfill', `${SRC_DIR}/App.jsx`],
  output: {
    path: DES_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
