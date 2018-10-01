<template>
    <div id="blog">
        <el-container class="pageCenter">
            <el-main>
                <el-card shadow="hover" class="articleItem" v-for="item in defaultCount" :key="item" @click.native="GoArticleDetails(item)">
                    <h2 class="item-titile">感感感感有感</h2>
                    <div class="item-summary">一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~</div>
                    <div class="item-info">
                        <span class="el-icon-time"></span>2018-9-22
                        <!-- <span class=""></span>{{item}} -->
                        <span class="el-icon-view"></span>9
                    </div>
                </el-card>
                <div v-if="moreBtn" class="moreBtn" @click="loadMore"><span :class="loadMoreBten"></span>加载更多</div>
            </el-main>
            <el-aside width="280px">
                <v-ArticleSort></v-ArticleSort>   
                <v-Recommend></v-Recommend>
            </el-aside>
        </el-container>
    </div>
</template>
<script>
import ArticleSort from '../components/ArticleSort';
import Recommend from '../components/Recommend';
export default {
    data() {
        return {
            defaultCount: 11,
            isLoad: false
        };
    },
    components: {
        'v-ArticleSort': ArticleSort,
        'v-Recommend': Recommend
    },
    computed: {
        moreBtn() {
            return this.defaultCount > 10 ? true : false;
        },
        loadMoreBten() {
            if (!!this.isLoad) {
                return 'el-icon-loading';
            } else {
                return 'el-icon-caret-bottom';
            }
        }
    },
    methods: {
        loadMore() {
            this.isLoad = true;
            this.timer = setTimeout(() => {
                this.isLoad = false;
            }, 3000);
        },
        GoArticleDetails(id) {
            console.log('dianji');
            this.$router.push({
                name: 'articleDetails',
                params: { articleId: id }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
#blog {
    background: #fff;
    .moreBtn {
        text-align: center;
        color: #999;
        font-size: 14px;
        cursor: pointer;
        span {
            margin-right: 10px;
        }
    }
}
.articleItem {
    width: 100%;
    // height: 200px;
    margin: 20px 0;
    cursor: pointer;
    .item-titile {
        margin-bottom: 15px;
        color: #333;
    }
    .item-summary {
        text-indent: 2em;
        font-size: 14px;
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin-bottom: 15px;
    }
    .item-info {
        padding: 0 20px;
        text-align: right;
        font-size: 12px;
        color: #999;
        span {
            margin-right: 5px;
            margin-left: 10px;
        }
    }
}
</style>
