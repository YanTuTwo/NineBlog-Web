<template>
    <div id="Notes">
        <el-container class="pageCenter">
            <el-container style="padding: 20px">
                <el-header height="auto">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </el-header>
                <el-main>
                    <dl v-for="(value, key) in noteList" :key="key">
                        <dt>{{key}}</dt>
                        <dd v-for="item in value" :key="item.id"><i class="el-icon-star-on"></i>{{item.createTime}}<span>{{item.title}}</span></dd>
                    </dl>
                </el-main>
            </el-container>    
            <el-aside width="280px" class="hidden-xs-and-down">
                <v-ArticleSort></v-ArticleSort>   
                <v-Recommend></v-Recommend>
            </el-aside>
        </el-container>
    </div>
</template>
<script>
import ArticleSort from '@/components/ArticleSort';
import Recommend from '@/components/Recommend';
export default {
    data() {
        return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: ['上海', '北京', '广州', '深圳', '年', '月', '日', '时', '分', '秒'],
            noteList: {
                '2019': [
                    {
                        id: 1,
                        year: '2019',
                        createTime: '2019-02-21 23:26:22',
                        title: 'Geoserver的搭建',
                        content: '哈哈哈'
                    },
                    {
                        id: 2,
                        year: '2019',
                        createTime: '2019-02-21 23:26:22',
                        title: 'Geoserver的搭建'
                    }
                ],
                '2018': [
                    {
                        id: 1,
                        year: '2018',
                        createTime: '2018-02-21 23:26:22',
                        title: 'Geoserver的搭建'
                    },
                    {
                        id: 2,
                        year: '2018',
                        createTime: '2018-02-21 23:26:22',
                        title: 'Geoserver的搭建'
                    },
                    {
                        id: 3,
                        year: '2018',
                        createTime: '2018-02-21 23:26:22',
                        title: 'Geoserver的搭建'
                    },
                    {
                        id: 4,
                        year: '2018',
                        createTime: '2018-02-21 23:26:22',
                        title: 'Geoserver的搭建'
                    }
                ]
            },
            isIndeterminate: true
        };
    },
    components: {
        'v-ArticleSort': ArticleSort,
        'v-Recommend': Recommend
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? this.cities : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    },
    beforeMount() {}
};
</script>
<style lang="scss" scoped>
@import '../assets/css/github.css';
#Notes {
    background: #fff;
    padding: 10px;
    .el-header {
        height: auto;
        .el-checkbox {
            margin-top: 15px;
        }
    }
    .el-aside {
        padding: 10px 0;
    }
    .el-main {
        margin-top: 20px;
        border-top: 1px solid #ccc;
        dl {
            dt {
                color: #999;
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            dd {
                padding-left: 30px;
                color: #666;
                line-height: 30px;
                height: 30px;
                cursor: pointer;
                i {
                    margin-right: 10px;
                }
                span {
                    font-weight: bold;
                    margin-left: 10px;
                }
                &:hover {
                    color: #409eff;
                }
            }
        }
    }
}
</style>
