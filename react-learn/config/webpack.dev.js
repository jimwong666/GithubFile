const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = "development";

module.exports = {
    output: {
      filename: "[name].js", // 打包后输出文件的文件名
      publicPath: "./"
    },
    mode: "development",
    module: {
      rules: [
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            include: [path.resolve(__dirname, '../', 'images')],
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
    devServer: {
      contentBase: path.join(__dirname, '../', 'dist'),
      open: true,
      compress: true,
      disableHostCheck: true,
      hot: true,
      hotOnly: true,
      historyApiFallback: true,
      publicPath: '/',
      // port: "8080",
      overlay: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool:"cheap-module-eval-source-map", // 生产环境 "cheap-module-source-map"
  }