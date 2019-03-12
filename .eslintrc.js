module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        browser: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        // 0-不验证；1-警告；2-错误
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 生产环境禁止使用debugger
        'no-undef': 2, // 不能有未定义的变量
        'no-extra-boolean-cast': 0, // 禁止不必要的bool转换
        'semi': [2, 'always'], // 语句强制分号结尾
        'indent': [2, 4, { SwitchCase: 1 }], // 缩进风格
        'space-before-function-paren': 0, // 函数定义时括号前面要不要有空格
        'arrow-parens': 0, // =>的前/后括号
        'generator-star-spacing': 0, // 生成器函数*的前后空格
        'no-unused-expressions': 2, // 禁止无用的表达式
        'padded-blocks': 0, // 块语句内行首行尾是否要空行
        'prettier/prettier': [
            1,
            {
                tabWidth: 4, //一个tab代表几个空格数
                singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
                bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
                semi: true, //行位是否使用分号，默认为true
                arrowParens: 'always',
                printWidth: 200 //一行的字符数，如果超过会进行换行，默认为80
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        UT: true,
        Util: true,
        window: true,
        document: true
    }
};
