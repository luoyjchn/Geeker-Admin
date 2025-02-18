<template>
  <div class="card content-box">
    <span class="text"> 图标选择器 🍓🍇🍈🍉</span>
    <SelectIcon v-model:icon-value="iconValue" />
    <el-descriptions :column="1" border title="配置项 📚">
      <el-descriptions-item label="iconValue"> 双向绑定的icon值，使用示例：v-model:icon-value="iconValue" </el-descriptions-item>
      <el-descriptions-item label="title"> 弹窗标题 </el-descriptions-item>
      <el-descriptions-item label="clearable"> 是否可清空，默认为 true </el-descriptions-item>
      <el-descriptions-item label="placeholder"> 输入框占位文本 </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts" name="selectIcon" setup>
import { ref } from "vue";
import SelectIcon from "@/components/SelectIcon/index.vue";

const iconValue = ref("");
</script>

<style lang="scss" scoped>
@use "./index";
</style>
