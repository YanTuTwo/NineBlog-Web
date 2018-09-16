<template>
    <div id="navgation">
        <nav class="fullPage" :class="navClass">
            <ul class="clearfix">
                <li><router-link to="about">关于</router-link></li>
                <li>生活</li>
                <li>读书</li>
                <li>资源</li>
                <li>博客</li>
                <li><router-link to="home">首页</router-link></li>
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
        }
    },
    watch: {
    },
    computed: {
        navClass() {
            return  this.isfullPage ? 'navTop' : '';
        }
    },
    methods:{
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
        this.$nextTick(() =>{
            window.addEventListener('scroll', this.handleScroll)
        })
    },
    destroyed() {

    }
}
</script>
<style lang="scss" scoped>
#navgation {
    nav.fullPage {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 50px;
        background: #33363B;
        z-index: 999;
        ul { 
            // max-width: 1200px;
            // margin:  0 auto;
            li {
                color: #fff;
                font-size: 14px;
                float: right;
                padding: 10px 15px;
                line-height: 30px;
                cursor: pointer;
                a {
                    color: #fff;
                }
                &:hover {
                    transform: scale(1.3);
                    transition: transform .3s;
                }
            }
        }
        &.navTop {
            border-bottom: 1px solid #acacac;
            box-shadow: 1px 2px 5px rgba(0,0,0,.072);
        }
    }

}
</style>
