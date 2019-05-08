<template>
    <div id="table" ref="tablewrap">
        <div class="tablewrap" id="tablewrap">
            <div class="table-header" id="table-header" ref="table-header">
                <table cellspacing="0" cellpadding="0" border="0" :style="defaultHeaderWidth">
                    <colgroup>
                        <col v-for="colitem in columns" :key="colitem.key" :width="colitem.width ? colitem.width : colWidth">
                        <col v-if="scrollY" :width="scrollbarWidth">
                    </colgroup>
                    <thead>
                        <tr>
                            <th v-for="thitem in columns" :key="thitem.key"><div class="table-cell">{{thitem.title}}</div></th>
                            <th v-if="scrollY" rowspan="1"></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="table-body" id="table-body" :class="{ 'table-overflowY' : scrollY, 'table-overflowX': scrollX}" :style="defaultHeight" @scroll="scrollBody">
                <table cellspacing="0" cellpadding="0" border="0" :style="defaultBodyWidth">
                    <colgroup>
                        <col v-for="colitem in columns" :key="colitem.key" :width="colitem.width ? colitem.width : colWidth">
                    </colgroup>
                    <tbody>
                        <tr v-for="(tritem, index) in data" :key="index" @mouseenter="trMouseEnter(tritem)" @click="trClick(tritem)">    
                            <td v-for="tditem in columns" :key="tditem.key"><div class="table-cell">{{tritem[tditem.key]}}</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['columns', 'data'],
    data() {
        return {
            tableWidth: 0,
            tableHeight: 0,
            headerHeight: 0,
            scrollY: false,
            scrollX: false,
            scrollbarWidth: 0
        };
    },
    watch: {
        columns() {
            this.initDom();
        },
        data() {
            this.initDom();
        }
    },
    computed: {
        colWidth() {
            let countWith = 0;
            let len = this.columns.length;
            this.columns.forEach((element) => {
                if (!!element.width) {
                    countWith += element.width;
                    len--;
                }
            });
            let colWidth = parseInt((this.tableWidth - countWith) / len);
            if (this.scrollY) {
                colWidth = parseInt((this.tableWidth - countWith - this.scrollbarWidth) / len);
            }
            return colWidth > 0 ? colWidth : 0;
        },
        defaultBodyWidth() {
            if (this.scrollX) {
                return {
                    width: this.tableWidth + 'px'
                };
            } else {
                return {};
            }
        },
        defaultHeaderWidth() {
            if (this.scrollX) {
                return {
                    width: this.tableWidth + this.scrollbarWidth + 'px'
                };
            } else {
                return {};
            }
        },
        defaultHeight() {
            if (this.scrollY) {
                return {
                    height: this.tableHeight - this.headerHeight + 'px'
                };
            } else {
                return {};
            }
        }
    },
    methods: {
        initDom() {
            this.$nextTick(() => {
                if (!!this.$refs.tablewrap.getAttribute('width')) {
                    this.tableWidth = parseInt(this.$refs.tablewrap.getAttribute('width'));
                    document.getElementById('tablewrap').style.width = this.tableWidth + 'px';
                } else {
                    this.tableWidth = this.$refs.tablewrap.offsetWidth;
                }
                let itemWidth = 0;
                this.columns.forEach((ele) => {
                    if (!!ele.width) {
                        itemWidth += ele.width;
                    }
                });
                if (itemWidth > this.tableWidth) this.scrollX = true;
                this.$nextTick(() => {
                    if (!!this.$refs.tablewrap.getAttribute('height')) {
                        // this.scrollY = true;
                        this.tableHeight = parseInt(this.$refs.tablewrap.getAttribute('height'));
                        document.getElementById('tablewrap').style.height = this.tableHeight + 'px';
                    } else {
                        this.tableHeight = this.$refs.tablewrap.offsetHeight;
                    }
                    this.headerHeight = document.getElementById('table-header').offsetHeight;
                    let bodyContentHeight = document.getElementById('table-body').offsetHeight;
                    if (bodyContentHeight > this.tableHeight - this.headerHeight) this.scrollY = true;
                });
            });
        },
        scrollBody() {
            // 绑定滚动条
            document.getElementById('table-header').scrollLeft = document.getElementById('table-body').scrollLeft;
        },
        getScrollbarWidth() {
            let odiv = document.createElement('div'); // 创建一个div
            let styles = {
                width: '100px',
                height: '100px',
                overflowY: 'scroll' // 让他有滚动条
            };
            for (let i in styles) odiv.style[i] = styles[i];
            document.body.appendChild(odiv); // 把div添加到body中
            this.scrollbarWidth = odiv.offsetWidth - odiv.clientWidth; // 相减
            odiv.parentNode.removeChild(odiv);
        },
        trMouseEnter(item) {
            this.$emit('tr-mouse-enter', item);
        },
        trClick(item) {
            this.$emit('tr-click', item);
        }
    },
    mounted() {
        this.getScrollbarWidth();
        this.initDom();
    }
};
</script>
<style lang="scss" scoped>
#table {
    width: inherit;
    height: 100%;
    table {
        table-layout: fixed;
    }
    .tablewrap {
        width: inherit;
        height: 100%;
        position: relative;
        border: 1px solid #dcdee2;
        border-bottom: 0;
        border-right: 0;
        overflow: hidden;
        &::before {
            content: '';
            position: absolute;
            background-color: #dcdee2;
            width: 100%;
            height: 1px;
            left: 0;
            bottom: 0;
            z-index: 1;
        }
        &::after {
            content: '';
            position: absolute;
            background-color: #dcdee2;
            width: 1px;
            height: 100%;
            top: 0;
            right: 0;
            z-index: 3;
        }
    }
    .table-header {
        overflow: hidden;
    }
    .table-body {
        overflow: hidden;
        background: #fff;
        tr {
            cursor: pointer;
            &:hover {
                background: #dcdee2;
            }
        }
    }
    .table-cell {
        padding-left: 18px;
        padding-right: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        box-sizing: border-box;
    }
    th {
        height: 40px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        border-right: 1px solid #e8eaec;
        background-color: #f8f8f9;
        min-width: 0;
        height: 48px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        vertical-align: middle;
        border-bottom: 1px solid #e8eaec;
        .table-cell {
            display: inline-block;
            word-wrap: normal;
            vertical-align: middle;
        }
    }
    td {
        text-align: center;
        min-width: 0;
        height: 48px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        vertical-align: middle;
        border-bottom: 1px solid #e8eaec;
        border-right: 1px solid #e8eaec;
    }
    .table-overflowY {
        overflow-y: auto;
    }
    .table-overflowX {
        overflow-x: auto;
    }
}
</style>
