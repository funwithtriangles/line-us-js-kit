const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dirNode = 'node_modules'
const dirApp = path.join(__dirname, 'sketches')
const dirAssets = path.join(__dirname, 'lib/assets')

const appHtmlTitle = 'Webpack Boilerplate'

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    vendor: [
      'lodash'
    ],
    bundle: path.join(dirApp, 'simple')
  },
  resolve: {
    modules: [
      dirNode,
      dirApp,
      dirAssets
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
      title: appHtmlTitle
    })
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true
        }
      },

      // STYLES
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [dirAssets]
            }
          }
        ]
      },

      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  devtool: 'eval',

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  }

}
