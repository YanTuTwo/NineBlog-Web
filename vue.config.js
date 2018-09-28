const path = require('path')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
  }
  
module.exports = {
	chainWebpack: config => {
		config
			.entry('app')
				.add("whatwg-fetch")
				.add("@babel/polyfill")
				.end()
			.resolve.alias
				.set('Util', resolve('src/util'))
	},
	devServer: {
		port: 8888,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	lintOnSave: 'error'
}