<template>
    <div id="articleDetails">
        <el-container class="pageCenter">
            <el-main>
                <div class="markdown-body" v-html="article"></div>
            </el-main>
            <el-aside width="280px">
                <v-ArticleSort></v-ArticleSort>   
                <v-Recommend></v-Recommend>
            </el-aside>
        </el-container>
        <div v-loading.fullscreen.lock="fullscreenLoading"></div>
    </div>
</template>
<script>
import Util from '@/util';
import ArticleSort from '@/components/ArticleSort';
import Recommend from '@/components/Recommend';
export default {
    data() {
        return {
            article: '',
            fullscreenLoading: false
        };
    },
    components: {
        'v-ArticleSort': ArticleSort,
        'v-Recommend': Recommend
    },
    methods: {
        initData() {
            this.loading = true;
            let url = '/getmd';
            let param = {
                id: this.$route.query.id
            };
            let headers = new Headers({
                'Content-Type': 'text/plain'
            });
            Util.get(url, param, headers).then((req) => {
                // console.log(req);
                this.article = req;
                this.loading = false;
            });
        }
    },
    mounted() {
        console.log(this.$route.query);
        this.initData();
    },
    destroyed() {}
};
</script>
<style lang="scss" scoped>
@import '../assets/css/github.css';
#articleDetails {
    background: #fff;
}
.markdown-body {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>
