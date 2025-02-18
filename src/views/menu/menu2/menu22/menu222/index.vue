<template>
  <div class="card content-box">
    <span class="text">我是menu2-2-2 🍓🍇🍈🍉</span>
    <el-input v-model="value" placeholder="测试缓存"></el-input>
  </div>
</template>

<script lang="ts" name="menu222" setup>
import { ref } from "vue";

const value = ref<string>("");
</script>

<style lang="scss" scoped>
@use "./index";
</style>
