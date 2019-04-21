<template>
    <div class="realtable">
        <!-- <v-table :columns="columns1" :data="data1" :width="500" @trClick="trClick"></v-table> -->
        <div id="chart"></div>
    </div>
</template>
<script>
import Highcharts from 'highcharts';
export default {
    data() {
        return {};
    },
    methods: {
        initChart() {
            // let categories = ['201904201805', '201904201805', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
            Highcharts.chart('chart', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: '过去6小时'
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        fillColor: {
                            linearGradient: [0, 0, 0, 300],
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [
                                    1,
                                    Highcharts.Color(Highcharts.getOptions().colors[0])
                                        .setOpacity(0)
                                        .get('rgba')
                                ]
                            ],
                            pointStart: Date.UTC(2019, 4, 21),
                            pointInterval: 3600 * 1000 // one day
                        }
                    }
                },
                xAxis: [
                    {
                        type: 'datetime'
                        // crosshair: true,
                        // tickmarkPlacement: 'on'
                        // labels: {
                        //     formatter: function() {
                        //         return categories[this.value];
                        //     },
                        //     step: 2
                        // },
                        // tickInterval: 1
                    }
                ],
                yAxis: [
                    {
                        labels: {
                            style: {
                                color: Highcharts.getOptions().colors[1]
                            }
                        },
                        title: {
                            text: '水位',
                            align: 'high',
                            offset: 0,
                            rotation: 0,
                            y: -10,
                            x: -10
                        },
                        lineWidth: 1,
                        lineColor: '#ccd6eb',
                        gridLineWidth: 0
                    },
                    {
                        title: {
                            text: '雨量',
                            align: 'high',
                            offset: 0,
                            rotation: 0,
                            y: -10,
                            x: 10
                        },
                        opposite: true,
                        gridLineWidth: 0
                    },
                    {
                        title: {
                            text: '积水',
                            align: 'high',
                            offset: 0,
                            rotation: 0,
                            y: -10,
                            x: 10
                        },
                        opposite: true,
                        gridLineWidth: 0
                    }
                ],
                tooltip: {
                    shared: true
                },
                legend: {
                    verticalAlign: 'top',
                    symbolHeight: 12,
                    symbolWidth: 12,
                    symbolRadius: 6
                },
                series: [
                    {
                        name: '雨量',
                        type: 'areaspline',
                        yAxis: 2,
                        data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54, 49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
                        tooltip: {
                            valueSuffix: 'mm'
                        },
                        marker: {
                            fillColor: '#7cb5ec',
                            symbol: 'circle',
                            lineColor: '#7cb5ec',
                            lineWidth: 1,
                            radius: 2
                        }
                    },
                    {
                        name: '水位',
                        type: 'spline',
                        yAxis: 1,
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
                        tooltip: {
                            valueSuffix: 'm'
                        },
                        color: '#7cb5ec',
                        marker: {
                            fillColor: '#fff',
                            symbol: 'circle',
                            lineColor: '#7cb5ec',
                            lineWidth: 1,
                            radius: 2
                        }
                    },
                    {
                        name: '积水',
                        type: 'spline',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6, 49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
                        tooltip: {
                            valueSuffix: 'cm'
                        },
                        color: '#7cb5ec',
                        marker: {
                            symbol: 'circle',
                            lineColor: '#7cb5ec',
                            lineWidth: 1,
                            radius: 2
                        }
                    }
                ]
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart();
        });
    }
};
</script>
<style lang="scss" scoped>
.realtable {
    width: 700px;
    height: 400px;
    margin: 0 auto;
}
</style>
