var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname + '/app',
  entry: [
    'font-awesome-webpack',
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
          test: /\.(png|jpg|jpeg|ico)$/,
          loader: "url-loader",
          query: { mimetype: "image/png" }
      },
      { 
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, 
        loader: 'url?limit=100000&name=[name].[ext]'
      }
    ]
  }
}

loaders: [
   
   // other loaders 
]