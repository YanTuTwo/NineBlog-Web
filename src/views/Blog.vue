<template>
    <div id="blog">
        <el-container class="pageCenter">
            <el-main>
                <el-card shadow="hover" class="articleItem" v-for="item in 10" :key="item">
                    <h2 class="item-titile">第一次搭建博客有感</h2>
                    <div class="item-summary">一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~</div>
                    <div class="item-info">
                        <span class="el-icon-time"></span>2018-9-22
                        <span class=""></span>{{item}}
                        <span class="el-icon-view"></span>9
                    </div>
                </el-card>
                <div>加载更多~~~~</div>
            </el-main>
            <el-aside width="320px">
                <el-card shadow="always" class="articleItem">
                    文章分档
                </el-card>
                <el-card shadow="always" class="articleItem">
                    精彩推荐
                </el-card>
            </el-aside>
        </el-container>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#blog {
    background: #fff;
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
            margin-right: 20px;
        }
    }
}
</style>
