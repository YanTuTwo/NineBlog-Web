<template>
    <div class="realtable">
        <!-- <v-table :columns="columns1" :data="data1" :width="500" @trClick="trClick"></v-table> -->
        <!-- <div id="chart"></div> -->
        <vue-slider v-model="value" :tooltip="'always'" ref="slider">
            <template v-slot:tooltip="{ value, focus }">
                <!-- <div :class="['custom-tooltip', { focus }]">{{ value }}</div> -->
                <input v-model="value1">
                <span  @click="ddd">dasdas</span>
            </template>
        </vue-slider>
        <div>value: {{ value2 }}</div>
        <vue-slider v-model="value2" :tooltip="'none'"></vue-slider>
    </div>
</template>
<script>
// import Highcharts from 'highcharts';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
export default {
    data() {
        return {
            value1: 0,
            value: 0,
            value2: [0, 11],
            marks: [0, 20, 50, 100]
        };
    },
    watch: {
        value() {
            this.value1 = Number(this.value);
        }
    },
    components: {
        VueSlider
    },
    methods: {
        ddd() {
            console.log('dasdasda');
            this.$refs.slider.setValue(Number(this.value1));
        }
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>
.realtable {
    width: 700px;
    height: 400px;
    margin: 100px auto;
}
.custom-tooltip {
    transform: translateY(5px);
}
.custom-tooltip.focus {
    font-weight: bold;
}
</style>
