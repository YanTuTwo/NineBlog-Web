<template>
    <div id="navgation">
        <nav class="fullPage" :class="navClass">
            <ul class="clearfix">
                <li><router-link to="home">首页</router-link></li>
                <li><router-link to="blog">博客</router-link></li>
                <li>资源</li>
                <li>读书</li>
                <li>生活</li>
                <li><router-link to="about">关于</router-link></li>
            </ul>
        </nav>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            scrollTop: '',
            isfullPage: false
        };
    },
    watch: {},
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
    nav.fullPage {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 52px;
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
                padding: 10px 15px;
                line-height: 30px;
                transition: 0.2s all linear;
                cursor: pointer;
                a {
                    color: #fff;
                }
            }
        }
        &.navTop {
            border-bottom: 1px solid #acacac;
            box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.072);
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
}
</style>
