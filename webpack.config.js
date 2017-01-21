var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template: __dirname + '/src/index.html'
    }),
    // extract inline css into separate 'styles.css'
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {test: /\.hbs$/, loader: 'handlebars'},
      {test: /bootstrap.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' },
      {test: /\.js$/, loader: 'babel?presets[]=es2015', include: [path.resolve(__dirname, 'src')]},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
      {test: /\.(woff|woff2)$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf$/,  loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot$/,  loader: "file" },
      {test: /\.svg$/,  loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
