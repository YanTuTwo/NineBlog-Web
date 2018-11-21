<template>
      <div class="about">
        <!-- <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row> -->
        <div class="content">
            <div class="step stepone" :class="{'complete': step === 2}">
                <span>填写基本信息</span>
            </div>
            <div class="step steptwo" :class="{'complete': step === 2}">
                <span></span>确认部门短信内容
            </div>
        </div>
        <div class="radio1">
            <label for="man" class="radio">
                <span class="radio-bg"></span>
                <input type="radio" name="sex" id="man" value="男" checked="checked" /> 男
                <span class="radio-on"></span>
            </label>
            <label for="woman" class="radio">
                <span class="radio-bg"></span>
                <input type="radio" name="sex" id="woman" value="女" /> 女
                <span class="radio-on"></span>
            </label>
        </div>
      </div>
</template>
<script>
export default {
    data() {
        return {
            hah: '',
            step: 1
        };
    }
};
</script>
<style lang="scss" scoped>
.radio1 {
    .radio {
        display: inline-block;
        position: relative;
        line-height: 18px;
        margin-right: 10px;
        cursor: pointer;
    }
    .radio input {
        display: none;
    }
    .radio .radio-bg {
        display: inline-block;
        height: 18px;
        width: 18px;
        border: 1px solid blue;
        margin-right: 5px;
        padding: 0;
        border-radius: 100%;
        vertical-align: top;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .radio .radio-on {
        display: none;
    }
    .radio input:checked + span.radio-on {
        width: 10px;
        height: 10px;
        position: absolute;
        border-radius: 100%;
        background: blue;
        top: 4px;
        left: 4px;
        transform: scale(0, 0);
        transition: all 0.2s ease;
        transform: scale(1, 1);
        display: inline-block;
    }
}
.content {
    background: #fff;
    height: 40px;
    margin-top: 10px;
    overflow: hidden;
    .step {
        width: 300px;
        height: 40px;
        background: #ccc;
        text-align: center;
        line-height: 40px;
        float: left;
        margin-left: 10px;
        font-size: 14px;
        position: relative;
        &.stepone {
            background-color: #d1e1fb;
            // vertical-align: middle;
            span {
                margin-left: 20px;
                display: inline-block;
                padding-left: 20px;
                background: url('../assets/images/勾.png') no-repeat left center;
            }
            &.complete {
                background: #d1fbe3;
                color: green;
                &::after {
                    content: '';
                    width: 0px;
                    height: 0px;
                    border: 20px solid #d1fbe3;
                    border-right-color: transparent;
                    border-bottom-color: transparent;
                    border-top-color: transparent;
                    position: absolute;
                    top: 0;
                    right: -40px;
                    z-index: 1;
                }
            }
            &::after {
                content: '';
                width: 0px;
                height: 0px;
                border: 20px solid #d1e1fb;
                border-right-color: transparent;
                border-bottom-color: transparent;
                border-top-color: transparent;
                position: absolute;
                top: 0;
                right: -40px;
                z-index: 1;
            }
        }
        &.steptwo {
            background: #ccc;
            &.complete {
                background: #d1e1fb;
                color: #333;
            }
            &::after {
                content: '';
                width: 0px;
                height: 0px;
                border: 20px solid #fff;
                border-right-color: transparent;
                border-bottom-color: transparent;
                border-top-color: transparent;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
