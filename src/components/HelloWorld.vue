<template>
	<div class="hello">
		<div  class="markdown-body" v-html="article"></div>
	</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            article: ''
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            let url = '/api/getmd';
            let param = {
                name: 'zhangjunjie',
                age: 14
            };
            let headers = new Headers({
                'Content-Type': 'text/plain'
            });
            Util.get(url, param, headers).then((req) => {
                console.log(req);
                this.article = req;
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>
