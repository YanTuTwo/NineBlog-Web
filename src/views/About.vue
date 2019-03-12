<template>
    <div class="realtable">
        <v-table :columns="columns1" :data="data1"></v-table>
    </div>
</template>
<script>
import Table from '../components/Table';
export default {
    data() {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                    width: 150
                },
                {
                    title: 'Age',
                    key: 'age',
                    width: 200
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park问问去诶哦亲无诶哦请勿IE欧全文Park问问去诶哦亲无诶哦请勿I',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        };
    },
    components: {
        'v-table': Table
    },
    methods: {
        trClick(item) {
            console.log(item);
        },
        trMouseOver(item) {
            console.log(item);
        }
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
