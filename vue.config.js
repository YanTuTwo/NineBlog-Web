const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: (config) => {
        config
            .entry('app')
            .add('whatwg-fetch')
            .add('@babel/polyfill')
            .end()
            .resolve.alias
            .set('Util', resolve('src/util'))
            .set('comp', resolve('src/comp'));
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
