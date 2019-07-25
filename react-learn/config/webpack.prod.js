const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

process.env.NODE_ENV = "production";

module.exports = webpackMerge(webpackBaseConfig, {
  mode: "production",  // 只要在生产模式下， 代码就会自动压缩，自动启用 tree shaking
  devtool:"cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, '../', 'dist'), // 必须使用绝对地址，输出文件夹
    filename: "js/[name].[chunkhash:8].js", // 打包后输出文件的文件名
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: "./"
  },
  module: {
    rules: [
      {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          include: [path.resolve(__dirname, '../', 'src')],
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              // 配置 url-loader 的可选项
              options: {
                name: '[name].[hash].[ext]',
                // 超出限制，创建的文件格式
                outputPath: 'images/',
                // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                limit: 102400,
              }
            }
          ]
      },
      {
        test: /.(eot|woff2?|ttf|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                name: '[name]-[hash:5].min.[ext]', // 和上面同理
                outputPath: 'fonts/',
                limit: 102400,
            }
        },
      },
      {
        test: /\.css$/,
        // include: [path.resolve(__dirname, '../', 'src')],
        exclude: /node_modules/,
        use: [
          // 提取css为独立文件
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // 开启类名等的hash值
              // modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js') //使用postcss单独的配置文件
              }
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        // include: [path.resolve(__dirname, '../', 'src')],
        exclude: /node_modules/,
        use: [
          // 提取css为独立文件
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //在@import之前要经过几次loader，下面的loader
              // 开启类名等的hash值
              // modules: true
              // localIdentName: '[local]--[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js') //使用postcss单独的配置文件
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        // include: [path.resolve(__dirname, '../', 'src')],
        exclude: /node_modules/,
        use: [
          // 提取css为独立文件
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //在@import之前要经过几次loader，下面的loader
              // 开启类名等的hash值
              // modules: true
              // localIdentName: '[local]--[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js') //使用postcss单独的配置文件
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 打包后先清除dist文件，先于HtmlWebpackPlugin运行，清楚地目录是 output.path
    //提取css为单独css文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
  ],
  // optimization: {

  // }
})