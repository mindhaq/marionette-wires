var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
    })
  ],
  module: {
    loaders: [
      {test: /\.hbs$/, loader: 'handlebars'},
      {
        test: /\.js$/, loader: 'babel?presets[]=es2015', include: [path.resolve(__dirname, 'src')]
      }
    ]
  }
};
