<template>
    <div ref="timePlugins">
       <canvas ref="front" class="front"></canvas>
       <canvas ref="back"></canvas>
    </div>
</template>
<script>
export default {
    data() {
        return {
            startTime: {
                day: 24,
                hour: 8,
                minute: 12,
                month: 3,
                second: 18,
                year: 1
            }
        };
    },
    methods: {
        initConstData() {
            // 初始化静态变量
            this.TIMEUNIT = ['年', '月', '日', '时', '分', '秒'];
            this.TIMEMAP = {
                0: '1110111', // |-|_ |_|
                1: '0010001',
                2: '0111110',
                3: '0111011',
                4: '1011001',
                5: '1101011',
                6: '1101111',
                7: '0110001',
                8: '1111111',
                9: '1111011',
            };
            this.COLOR = '#666';
            let front = this.$refs.front;
            let back = this.$refs.back;
            let timeBox = this.$refs.timePlugins;
            this.frontCtx = front.getContext('2d');
            this.backCtx = back.getContext('2d');
            this.ratio = window.devicePixelRatio || 1;
            front.width = back.width = timeBox.offsetWidth * this.ratio;
            front.height = back.height = timeBox.offsetHeight * this.ratio;
            this.frontCtx.strokeStyle = this.COLOR;
            this.frontCtx.lineCap = 'round';
            this.frontCtx.lineJoin = 'round';

            
            this.backCtx.textAlign = 'center';
            this.backCtx.textBaseline = 'middle';
        },
        startAnimate() {
            let timer = (function () {
                console.log('ddd');
                return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    }
                );
            })();
        }
    },
    beforeMount() {
        this.initConstData();
    },
    mounted() {
        this.startAnimate();
    },
    destroyed() {}
};
</script>
<style lang="scss" scoped>
.front {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
