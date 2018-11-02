<template>
    <div id="index">
        <header>
            <div class="pageCenter">
                <P>你有多自律，就有多自由。</P>
            </div>
        </header>
        <div class="pageCenter blob hidden-xs-and-down">
            <div class="blobhead clearfix">
                <div class="myname">
                    <el-progress type="circle" :percentage="percentage" :show-text="false" :width="140"></el-progress>
                    <span @mousedown="onMouseDown" @mouseup="percentage=0" @mouseout="percentage=0">Nine</span>
                </div>
                <div class="introduction">一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。<br>如果你有点兴趣的话，你随便看~</div>
            </div> 
            <el-row  :gutter="40">
                <el-col :span="index == 0 || index == 3 ? 8 : 16" v-for="(o, index) in 4" :key="o">
                    <el-card :body-style="{ padding: '0px' }">
                        <img v-lazy="'http://193.112.95.221:9999/images/'+index+'.jpg'" class="image" style="width:100%;max-height:250px;display:block">
                        <div style="padding: 14px;">
                            <h4>ytttttt有感</h4>
                            <p class="tip">一个有那么点爱摄影的前端打字员，为了克制自己的懒惰而建立的一个个人网站。如果你有点兴趣的话，你随便看~</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="blobmore clearfix" >
                <div class="morebtn pull-left">
                    <p>更多文章等待着你来探讨<span>喔~</span></p>
                    <el-button type="primary" plain @click="GoDetail">View more &gt;&gt;</el-button>
                </div>
                <div class="colock pull-left">
                    <p>在前端的路上越走越远....</p>
                    <div id="time"></div>
                </div>
            </div>
        </div>
        <div class="photography">
            <div class="pageCenter">
               <div style="text-align: center;color:#fff;">开发中....</div>
            </div>
        </div>
        <div class="resource">
            <div class="pageCenter">
               <!-- <div class="slider" id="carousel">
                    <ul>
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/1.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/2.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/3.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/4.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/5.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/1.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/2.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/3.jpg" /></li>  
                        <li><img src="http://193.112.95.221:9999/images/avatarimg/4.jpg" /></li>  
                    </ul>
                    <div class="arrow">
                        <div class="prev" id="prev"></div>
                        <div class="next" id='next'></div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="readbook">
        </div>
        <div class="aboutme"></div>
        <Login v-if="showlogin" v-on:cancelBtn="cancelBtn"></Login>
    </div>
</template>
<script>
import InitTime from '../plugins/time';
import Login from '@/components/Login';
// import Carousel from '../plugins/carousel';
export default {
    data() {
        return {
            article: '',
            percentage: 0,
            showlogin: false
        };
    },
    components: {
        Login: Login
    },
    computed: {
        starttime() {
            let starttime = {};
            let overdate =
                new Date().getTime() -
                new Date('2017-07-14 08:53:00').getTime();
            starttime.year = parseInt(overdate / 1000 / 60 / 60 / 24 / 365);
            starttime.month = parseInt(
                (overdate % (1000 * 60 * 60 * 24 * 365)) /
                    (1000 * 60 * 60 * 24 * 30)
            );
            starttime.day = parseInt(
                ((overdate % (1000 * 60 * 60 * 24 * 365)) %
                    (1000 * 60 * 60 * 24 * 30)) /
                    (1000 * 60 * 60 * 24)
            );
            starttime.hour = parseInt(((overdate / 1000) % (3600 * 24)) / 3600);
            starttime.minute = parseInt(((overdate / 1000) % 3600) / 60);
            starttime.second = parseInt((overdate / 1000) % 60);
            return starttime;
        }
    },
    methods: {
        GoDetail() {
            this.$router.push({
                name: 'blog'
            });
        },
        onMouseDown() {
            this.percentage = 100;
            if (this.downTimer) clearTimeout(this.downTimer);
            this.downTimer = setTimeout(() => {
                if (this.percentage === 100) {
                    clearTimeout(this.downTimer);
                    console.log('1秒后触发');
                    this.showlogin = true;
                }
            }, 1000);
        },
        onMouseUp() {
            this.percentage = 0;
        },
        cancelBtn() {
            this.showlogin = false;
        }
    },
    mounted() {
        this.$nextTick(() => {
            InitTime(26, 24, 16, 26, 3, this.starttime);
            // Carousel.init('carousel');
        });
    },
    destroyed() {}
};
</script>
<style lang="scss" scoped>
#time {
    position: relative;
    margin: 0 80px;
    height: 90px;
}
#index {
    width: 100%;
    // height: 3000px;
    background: #fff;
    margin-top: -60px;
    header {
        margin-top: 50px;
        height: 450px;
        width: 100%;
        background: #33363b;
        p {
            font-size: 30px;
            color: #fff;
            line-height: 450px;
            text-align: center;
        }
    }
    .blob {
        padding: 60px;
        .el-col {
            margin-bottom: 40px;
        }
        .el-card {
            cursor: pointer;
            // margin-bottom: 40px;
            color: #666;
            .tip {
                // text-indent: 20px;
                margin-top: 10px;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            &:hover {
                box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);
            }
        }
        .blobhead {
            text-align: center;
            line-height: 80px;
            font-weight: 700;
            margin-bottom: 60px;
            .myname {
                position: relative;
                float: left;
                font-size: 50px;
                height: 80px;
                width: 35%;
                color: #241e20;
                border-right: 2px solid #ccc;
                .el-progress {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                span {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    cursor: pointer;
                }
            }
            .introduction {
                width: 64%;
                height: 80px;
                padding: 15px 40px;
                font-size: 14px;
                line-height: 20px;
                float: left;
                color: #666;
            }
        }
        .blobmore {
            height: 120px;
            .morebtn {
                width: 40%;
                height: 100%;
                padding: 15px 50px;
                text-align: center;
                border-right: 2px solid #ccc;
                p {
                    padding: 10px 0;
                    color: #666;
                    span {
                        font-size: 24px;
                        // font-weight: 700;
                    }
                }
            }
            .colock {
                width: 59%;
                height: 100%;
                text-align: center;
                p {
                    padding: 0 50px;
                    line-height: 30px;
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }
    .photography {
        position: relative;
        width: 100%;
        height: 700px;
        padding: 100px 0 50px 0;
        background-image: url(../assets/images/bg.jpg);
        background-size: cover;
        // -webkit-filter: blur(2px); /* Chrome, Opera */
        // -moz-filter: blur(2px);
        // -ms-filter: blur(2px);
        // filter: blur(2px);
        // &::after {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     content: '';
        //     background-color: #000;
        //     opacity: 0.8;
        //     z-index: 1;
        //     width: 100%;
        //     height: 100%;
        // }
    }
    .resource {
        .slider {
            height: 700px;
            position: relative;
        }
        .slider li {
            list-style: none;
            position: absolute;
            left: 200px;
            top: 0;
        }
        .slider li img {
            width: 100%;
            display: block;
        }
        .arrow {
            opacity: 1;
        }
        .prev,
        .next {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 50%;
            margin-top: -30px;
            z-index: 99;
            border-radius: 10px;
            cursor: pointer;
        }
        .next {
            right: -60px;
            border-top: 10px solid #999;
            border-right: 10px solid #999;
            transform: rotate(45deg);
        }
        .prev {
            left: -60px;
            border-top: 10px solid #999;
            border-left: 10px solid #999;
            transform: rotate(-45deg);
        }
    }
}
</style>
