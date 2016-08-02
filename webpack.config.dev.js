import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const PORT = 3000;

export default {
  port: PORT,
  devtool: 'inline-source-map',
  resolve:{
    root:[
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  },
  entry: [
    './src/main.js',
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${PORT}`
  ],
  externals: {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.json$/,
      loaders: ['json']
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: path.join(__dirname,'src/index.html'), inject: 'body' })
  ]
};
