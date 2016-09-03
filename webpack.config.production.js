import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: ['./src/main'],
  resolve: {
    root: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [path.join(__dirname, 'src'), /node\_modules\/react-ui-dropdown/]
    }, {
      test: /\.styl$/,
      /*eslint-disable max-len */
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!stylus-loader'),
      include: [path.join(__dirname, 'src')]
      /*eslint-enable max-len */
    }, {
      test: /\.woff2$/,
      loader: 'file-loader?name=font/[name].[ext]?[hash]'
    }, {
      test: /\.png$/,
      loader: 'file-loader?name=images/[name].[ext]?[hash]'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {allChunks: false}),
  //new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new HtmlWebpackPlugin({template: path.join(__dirname, 'src/index.html'), inject: 'body'})
  ]
};
