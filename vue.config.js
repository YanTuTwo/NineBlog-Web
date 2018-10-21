const path = require('path');
const webpack = require('webpack');
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // webpack编译后export default会多一层default!!!
    configureWebpack: {
        resolve: {
            alias: {
                "Util": resolve('src/util')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                Util: 'Util'
            })
        ]
    },
    chainWebpack: (config) => {
        config
            .entry('app')
            .add('whatwg-fetch')
            .add('@babel/polyfill')
            .end()
    },
    devServer: {
        host: 'localhost',
        port: 8888,
        proxy: {
            '/api': {
                // target: 'http://193.112.95.221:9999',
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    },
    lintOnSave: 'error'
};
