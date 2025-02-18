<template>
  <div class="card content-box">
    <span class="text"> 按钮权限 🍓🍇🍈🍉</span>
    <el-alert
      :closable="false"
      :title="`当前用户按钮权限：${JSON.stringify(Object.keys(BUTTONS))}`"
      class="mb20"
      type="success"
    />
    <el-divider content-position="left"> 使用 Hooks 方式绑定权限 </el-divider>
    <el-row class="mb20">
      <el-button v-if="BUTTONS.add" :icon="CirclePlus" type="primary"> 新增 </el-button>
      <el-button v-if="BUTTONS.edit" :icon="EditPen" type="warning"> 编辑 </el-button>
      <el-button v-if="BUTTONS.delete" :icon="Delete" plain type="danger"> 删除 </el-button>
      <el-button v-if="BUTTONS.import" :icon="Upload" plain type="info"> 导入数据 </el-button>
      <el-button v-if="BUTTONS.export" :icon="Download" plain type="info"> 导出数据 </el-button>
    </el-row>
    <el-divider content-position="left"> 使用 v-auth 指令绑定单个权限 </el-divider>
    <el-row class="mb20">
      <el-button v-auth="'add'" :icon="CirclePlus" type="primary"> 新增 </el-button>
      <el-button v-auth="'edit'" :icon="EditPen" type="warning"> 编辑 </el-button>
      <el-button v-auth="'delete'" :icon="Delete" plain type="danger"> 删除 </el-button>
      <el-button v-auth="'import'" :icon="Upload" plain type="info"> 导入数据 </el-button>
      <el-button v-auth="'export'" :icon="Download" plain type="info"> 导出数据 </el-button>
    </el-row>
    <el-divider content-position="left"> 使用 v-auth 指令绑定多个权限 </el-divider>
    <el-row>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" :icon="CirclePlus" type="primary"> 新增 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" :icon="EditPen" type="warning"> 编辑 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" :icon="Delete" plain type="danger"> 删除 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" :icon="Upload" plain type="info"> 导入数据 </el-button>
      <el-button v-auth="['add', 'edit', 'delete', 'import', 'export']" :icon="Download" plain type="info"> 导出数据 </el-button>
    </el-row>
  </div>
</template>

<script lang="ts" name="authButton" setup>
import { useAuthButtons } from "@/hooks/useAuthButtons";
import { CirclePlus, Delete, Download, EditPen, Upload } from "@element-plus/icons-vue";

const { BUTTONS } = useAuthButtons();
</script>

<style lang="scss" scoped>
@use "./index";
</style>
