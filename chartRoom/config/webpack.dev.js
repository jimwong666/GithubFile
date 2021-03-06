const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');

process.env.NODE_ENV = "development";

module.exports = webpackMerge(webpackBaseConfig, {
  mode: "development",
  devtool:"cheap-module-eval-source-map", // 开发环境
  output: {
    filename: "[name].js", // 打包后输出文件的文件名
    chunkFilename: '[name].js',
    publicPath: "./"
  },
  devServer: {
    contentBase: path.join(__dirname, '../', 'dist'),
    open: true,
    compress: true,
    disableHostCheck: true,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    publicPath: '/', // 确保已 "/" 开始和结尾
    port: "8080",
    overlay: true,
    // proxy: {},
  },
  module: {
    rules: [
      {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          include: [path.resolve(__dirname, '../', 'src')],
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
      },
      {
        test: /.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, '../', 'src')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
                sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, //在@import之前要经过几次loader，下面的loader
              sourceMap: true,
              // 开启类名等的hash值
              modules: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
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
      { // 编译依赖，如想修改ant的css源码
        test: /\.(css|less)$/,
        include: /node_modules/, 
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              // modifyVars: {"@primary-color": "#f9c700"} //修改UI库里面的less变量
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),  //用于启动HMR时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin(), // HMR
  ],
})