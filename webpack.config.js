var HtmlWebpackPlugin = require('html-webpack-plugin')
const SOURCE_PATH = path.resolve(ROOT_PATH, 'src')

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
}
