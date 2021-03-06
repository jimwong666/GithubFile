const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  ['@babel/polyfill',path.resolve(__dirname, '../', 'src/index.js')], // 入口文件
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [path.resolve(__dirname, '../', 'src')],
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
        }
      ]
    },
    plugins: [
      // 自动添加模版
      new HtmlWebpackPlugin({
			  filename: 'index.html',
			  template: path.resolve(__dirname, '../', 'public/index.html'),
			  favicon: path.resolve(__dirname, '../', 'public/favicon.ico')
      }),
      new webpack.DefinePlugin({ // 自定义全局常量

      })
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, '../', 'src'),
        "node_modules"
      ],
      // 文件扩展名，写明以后就不需要每个文件写后缀
      extensions: ['.js', '.jsx', '.css', '.json'],
      // 路径别名，比如这里可以使用 css 指向 static/css 路径
      alias: {
        '@': path.resolve(__dirname, '../src'),
        _components: path.resolve(__dirname, '../', 'src/components'),
        _pages: path.resolve(__dirname, '../', 'src/pages'),
        _styles: path.resolve(__dirname, '../', 'src/styles'),
        _images: path.resolve(__dirname, '../', 'src/images'),
        _utils: path.resolve(__dirname, '../', 'src/utils')
      }
    },
}