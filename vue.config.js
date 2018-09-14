const path = require('path')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
  }
  
module.exports = {
	chainWebpack: config => {
		config
			.entry('app')
				.add("whatwg-fetch")
				.end()
			.resolve.alias
				.set('Util', resolve('src/util'))
	}
}