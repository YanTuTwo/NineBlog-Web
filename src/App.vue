<template>
	<div id="app">
		<Navigation></Navigation>	
		<div class="container">
            <div v-if="invalidRoute" class="fourAndFour">404</div>
			<router-view v-else/>
		</div>
		<footer>
			<p>你有多自律，就有多自由。</p>
		</footer>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
    name: 'App',
    components: {
        Navigation
    },
    computed: {
        invalidRoute() {
            return !this.$route.matched || this.$route.matched.length === 0;
        }
    }
};
</script>
<style lang="scss" scoped>
#app {
    // max-width: 1200px;
    margin: 0 auto;
    // padding: 5px;
    background: #eaeaea;
    // background-image: linear-gradient( 135deg, #92FFC0 10%, #002661 100%);
    footer {
        height: 100px;
        width: 100%;
        background: #33363b;
        p {
            text-align: center;
            color: #f1f1f1;
            font-size: 16px;
            line-height: 100px;
            // max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }
    }
    .container {
        padding-top: 40px;
    }
    .fourAndFour {
        width: 100%;
        font-size: 100px;
        color: #333;
        text-align: center;
        height: 600px;
        line-height: 600px;
    }
}
</style>
