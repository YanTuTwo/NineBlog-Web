<template>
    <div id="login">
        <el-dialog title="Login" :visible="true" center :show-close='false' width='30%'>
            <el-form :model="form">
                <el-form-item label="UserName：" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="PassWord：" :label-width="formLabelWidth">
                    <el-input v-model="form.password" auto-complete="off" type="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('cancelBtn')">取 消</el-button>
                <el-button type="primary" @click="loginBtn">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formLabelWidth: '100px',
            form: {
                name: 'admin',
                password: '123456'
            }
        };
    },
    components: {},
    methods: {
        loginBtn() {
            console.log('login');
        }
    },
    mounted() {},
    destroyed() {}
};
</script>
<style lang="scss" scoped>
</style>
