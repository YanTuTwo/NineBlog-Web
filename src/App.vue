<template>
	<div id="app">
		<Navigation></Navigation>	
		<div class="container">
			<router-view/>
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
        padding-top: 50px;
    }
}
</style>
