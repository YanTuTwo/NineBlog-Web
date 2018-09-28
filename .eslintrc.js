module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		browser: true
	},
	extends: ["plugin:vue/essential", "@vue/prettier"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		'no-undef': 2,
		'no-extra-boolean-cast': 0,
		'semi': [0, 'always'],
		'indent': [2, 4, { 'SwitchCase': 1 }],
		'space-before-function-paren': 0,
		'arrow-parens': 0,
		'generator-star-spacing': 0,
		'no-unused-expressions': 2,
		'padded-blocks': 0,
		"prettier/prettier": ["error", {
			tabWidth: 4,
			singleQuote: true,
			bracketSpacing: true,
			arrowParens: 'always',
			semi: true,
		}]
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	globals: {
		"Util": true,
		"window":true,
        "document":true,
    }
};
