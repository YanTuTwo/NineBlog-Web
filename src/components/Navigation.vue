<template>
    <div id="navgation">
        <nav class="fullPage hidden-xs-and-down" :class="navClass">
            <ul class="clearfix">
                <li v-for="(item,key) in navigation" :key="key"><router-link :to="key">{{item}}</router-link></li>
            </ul>
        </nav>
        <nav :class="navClass" class="clearfix fullPage hidden-xs-and-up">
            <div class="logoName">Nine</div>
            <div class="menu" @click="isShowMenu = true"><span class="el-icon-menu"></span></div>
        </nav>
        <transition name="slide-fade">
            <div class="phoneMenu" v-if="isShowMenu">
                <span class="el-icon-close" @click="isShowMenu = false"></span>'
                <div v-for="(item,key) in navigation" :key="key">
                    <router-link :to="key" :class="{'active':$route.name === key }">{{item}}</router-link>
                </div>
            </div>
        </transition>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            scrollTop: '',
            isfullPage: false,
            isShowMenu: false
        };
    },
    watch: {
        isShowMenu(val) {
            if (val) {
                document.getElementsByTagName('body')[0].style.overflowY =
                    'hidden';
            } else {
                document.getElementsByTagName('body')[0].style.overflowY =
                    'auto';
            }
        },
        $route(val) {
            console.log(val);
            this.isShowMenu = false;
        }
    },
    computed: {
        navClass() {
            return this.isfullPage ? 'navTop' : '';
        }
    },
    methods: {
        handleScroll() {
            this.scrollTop = document.documentElement.scrollTop;
            if (this.scrollTop > 0) {
                this.isfullPage = true;
            } else {
                this.isfullPage = false;
            }
        }
    },
    beforeMount() {
        this.navigation = {
            home: '首页',
            blog: '博客',
            resource: '资源',
            reading: '读书',
            life: '生活',
            about: '关于'
        };
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('scroll', this.handleScroll);
        });
    },
    destroyed() {}
};
</script>
<style lang="scss" scoped>
#navgation {
    .active {
        color: #fff !important;
    }
    nav.fullPage {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #33363b;
        z-index: 999;
        ul {
            max-width: 1200px;
            margin: 0 auto;
            text-align: right;
            width: 100%;
            display: table; /* 调教webkit*/
            word-spacing: -1em;
            li {
                word-spacing: 0;
                position: relative;
                color: #fff;
                font-size: 14px;
                // float: right;
                display: inline-block;
                line-height: 30px;
                transition: 0.2s all linear;
                cursor: pointer;
                a {
                    padding: 10px 15px;
                    color: #fff;
                    display: inline-block;
                    text-align: center;
                }
            }
        }
        .logoName {
            cursor: pointer;
            float: left;
            line-height: 42px;
            font-size: 26px;
            color: #fff;
            padding-left: 20px;
            font-family: Comic Sans MS;
        }
        .menu {
            float: right;
            span {
                line-height: 42px;
                font-size: 26px;
                color: #7f7f7f;
                padding: 0 10px;
                cursor: pointer;
            }
        }
        &.navTop {
            border-bottom: 1px solid #acacac;
            box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.072);
        }
        &.hidden-xs-and-down {
            height: 52px;
        }
        &.hidden-xs-and-up {
            height: 42px;
        }
    }

    li::before {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #fff;
        transition: 0.2s all linear;
    }

    li:hover::before {
        width: 100%;
        top: 0;
        left: 0;
        transition-delay: 0.1s;
        border-bottom-color: #fff;
        z-index: -1;
    }

    li:hover ~ li::before {
        left: 0;
    }
    .phoneMenu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        overflow: hidden;
        z-index: 999;
        box-sizing: border-box;
        padding: 20%;
        span {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            color: #7f7f7f;
        }
        div {
            text-align: center;
            width: 100%;
            padding: 10% 0;
            border-bottom: 2px solid #7f7f7f;
            a {
                line-height: 30px;
                color: #7f7f7f;
                font-size: 30px;
            }
        }
    }
}
// 过渡动画
.slide-fade-enter-active {
    transition: all 0.5s ease;
}
.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-100%) translateX(100%);
    opacity: 0;
}
.slide-fade-leave-to {
    transform: translateY(100%) translateX(-100%);
}
</style>
