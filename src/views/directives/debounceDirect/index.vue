<template>
  <div class="card content-box">
    <span class="text">防抖指令 🍇🍇🍇🍓🍓🍓</span>
    <el-button v-debounce="debounceClick" type="primary"> 防抖按钮 (0.5秒后执行) </el-button>
  </div>
</template>

<script lang="ts" name="debounceDirect" setup>
import { ElMessage } from "element-plus";

const debounceClick = () => {
  ElMessage.success("我是防抖按钮触发的事件 🍍🍓🍌");
};
</script>

<style lang="scss" scoped>
@use "./index";
</style>
