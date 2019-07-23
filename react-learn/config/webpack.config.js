const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:  './src/js/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, '../', 'dist'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js", // 打包后输出文件的文件名
      publicPath: "./"
    },
    mode: "development",
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader', //主要用于编译es6语法和react的jsx语法
                query: {
                  cacheDirectory: true //开启缓存，提升速度
                }
                //options请看.babelrc文件
              }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            include: [path.resolve(__dirname, '../', 'images')],
            exclude: /node_modules/,
            use: [
              {
                loader: 'url-loader',
                // 配置 url-loader 的可选项
                options: {
                  // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                  limit: 10000,
                  // 超出限制，创建的文件格式
                  // ./images/[图片名].[hash].[图片格式]
                  name: 'images/[name].[hash].[ext]'
                }
              }
            ]
        },
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, '../', 'src')],
          use: [
            // 提取css为独立文件
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                // 开启类名等的hash值
                // modules: true
              }
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: '../dist',
      open: true,
      compress: true,
      disableHostCheck: true,
      hot: true,
      historyApiFallback: true,
      publicPath: '/',
      overlay: true,
    },
    plugins: [
      new CleanWebpackPlugin(), // 打包后先清除dist文件，先于HtmlWebpackPlugin运行，清楚地目录是 output.path
      //提取css为单独css文件
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }),
      // 自动添加模版
      new HtmlWebpackPlugin({
        title: 'test',
			  filename: 'index.html',
			  template: path.resolve(__dirname, '../', 'index.html'),
			  // favicon: path.resolve(__dirname, '../', 'public/favicon.ico')
      }),
    ],
    resolve: {
        // 文件扩展名，写明以后就不需要每个文件写后缀
        extensions: ['.js', '.css', '.json'],
        // 路径别名，比如这里可以使用 css 指向 static/css 路径
        alias: {
          '@': path.resolve(__dirname, '../')
        }
      }
  }