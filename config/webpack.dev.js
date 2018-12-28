const htmlPlugin = require('html-webpack-plugin')
const path = require("path")
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                },
                {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                },
                {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }
            ]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    plugins: [
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true //removeAttrubuteQuotes是去掉属性的双引号。
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template: './src/index.html' //是要打包的html模版路径和文件名称。

        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        compress: true,
        port: 8888
    }
}