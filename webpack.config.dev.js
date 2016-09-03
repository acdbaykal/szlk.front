import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const PORT = 3000;
const EXCLUDE_REGEXP = /node_modules\/(?!(react\-ui\-dropdown)\/).*/;

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
      loader: 'babel',
      //eslint-disable-next-line max-len
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/react-ui-dropdown')],
      query: {
        presets: ['react', 'es2015', 'airbnb', 'stage-0'],
      //  'ignore':EXCLUDE_REGEXP
      }
    },
    {
      test: /\.json$/,
      loaders: ['json']
    },
    {
      test: /\.styl$/,
      /* eslint-disable max-len */
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader',
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/react-ui-dropdown')]
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
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(true)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: path.join(__dirname, 'src/index.html'), inject: 'body' })
  ]
};
