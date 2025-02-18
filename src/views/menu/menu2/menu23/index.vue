<template>
  <div class="card content-box">
    <span class="text">我是menu2-3 🍓🍇🍈🍉</span>
    <el-input v-model="value" placeholder="测试缓存"></el-input>
  </div>
</template>

<script lang="ts" name="menu23" setup>
import { ref } from "vue";

const value = ref("");
</script>

<style lang="scss" scoped>
@use "./index";
</style>
