const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: "./src/pages/index.js"
  },
  output: {
    filename: "Project.js",
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        }
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ]
}
