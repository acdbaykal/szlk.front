import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const PORT = 3000;

export default {
  port: PORT,
  devtool: 'eval-source-map',
  resolve:{
    root:[
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  },
  // entry: [
  //   './src/main.js',
  //   'webpack/hot/dev-server',
  //   `webpack-dev-server/client?http://localhost:${PORT}`
  // ],
  output: {
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.styl$/,
      /* eslint-disable max-len */
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
      /* eslint-enable max-len */
    }, {
      test: /\.woff2$/,
      loader: 'file-loader?name=font/[name].[ext]?[hash]'
    }, {
      test: /\.png$/,
      loader: 'file-loader?name=images/[name].[ext]?[hash]'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }]
  },
  plugins: [
  ]
};
