<template>
  <div class="content-box">
    <TreeFilter
      :default-value="treeFilterValue.departmentId"
      :request-api="getUserDepartment"
      label="name"
      title="部门列表(单选)"
      @change="changeTreeFilter"
    />
    <TreeFilter
      :default-value="treeFilterValue1.departmentId"
      :request-api="getUserDepartment"
      label="name"
      multiple
      title="部门列表(多选)"
      @change="changeTreeFilter1"
    />
    <div class="descriptions-box card">
      <span class="text"> 树形筛选器 🍓🍇🍈🍉</span>
      <el-descriptions :column="1" border title="配置项 📚">
        <el-descriptions-item label="requestApi"> 请求分类数据的 api </el-descriptions-item>
        <el-descriptions-item label="data"> 分类数据，如果有分类数据，则不会执行 api 请求 </el-descriptions-item>
        <el-descriptions-item label="title"> treeFilter 标题 </el-descriptions-item>
        <el-descriptions-item label="id"> 选择的id，默认为 “id” </el-descriptions-item>
        <el-descriptions-item label="label"> 显示的label，默认为 “label” </el-descriptions-item>
        <el-descriptions-item label="multiple"> 是否为多选，默认为 false </el-descriptions-item>
        <el-descriptions-item label="defaultValue"> 默认选中的值 </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script lang="ts" name="treeFilter" setup>
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { getUserDepartment } from "@/api/modules/user";
import TreeFilter from "@/components/TreeFilter/index.vue";

const treeFilterValue = reactive({ departmentId: "1" });
const changeTreeFilter = (val: string) => {
  ElMessage.success(`你选择了 id 为 ${val} 的数据🤔`);
  treeFilterValue.departmentId = val;
};

const treeFilterValue1 = reactive({ departmentId: ["11"] });
const changeTreeFilter1 = (val: string[]) => {
  ElMessage.success(`你选择了 id 为 ${JSON.stringify(val)} 的数据🤔`);
  treeFilterValue1.departmentId = val;
};
</script>

<style lang="scss" scoped>
@use "./index";
</style>
