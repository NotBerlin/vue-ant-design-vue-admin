const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpackMock = require('webpack-api-mocker');

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

module.exports = {
    // 基本路径
    //publicPath: './',
    // 输出文件目录
    //outputDir: 'dist',
    configureWebpack: {
        //入口文件，一般为main.js
        entry: './main.js',
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `[name].${new Date().getTime()}.js`,
            chunkFilename: `[name].${new Date().getTime()}.js`
        }
    },
    chainWebpack: config => {
        config.module
            .rule("txt")
            .test(/\.txt$/)
            .use("raw-loader")
            .end();
    },
    configureWebpack: config => {
        // 生产环境相关配置
        if (isProduction) {
            // 代码压缩
            config.plugins.push(
                new HtmlWebpackPlugin({ template: './src/index.html' })
            )
            // gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
        }
    },
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    devServer: {
        // 本地ip地址
        host: 'localhost',
        port: 8080,
        open: true,
        /* 使用代理 */
        proxy: {
            '/api': {
                before(app) {
                    webpackMock(app, path.resolve(__dirname, 'src/servers/mock-server.js'));
                },
                /* 目标代理服务器地址 */
                target: 'http://localhost:8080/',
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
};

