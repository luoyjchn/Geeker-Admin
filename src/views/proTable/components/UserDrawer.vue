<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" :title="`${drawerProps.title}用户`" size="450px">
    <el-form
      ref="ruleFormRef"
      :disabled="drawerProps.isView"
      :hide-required-asterisk="drawerProps.isView"
      :model="drawerProps.row"
      :rules="rules"
      label-suffix=" :"
      label-width="100px"
    >
      <el-form-item label="用户头像" prop="avatar">
        <UploadImg v-model:image-url="drawerProps.row!.avatar!" :file-size="3" height="135px" width="135px">
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
          <template #tip> 头像大小不能超过 3M </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="用户照片" prop="photo">
        <UploadImgs v-model:file-list="drawerProps.row!.photo!" border-radius="50%" height="140px" width="140px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
          <template #tip> 照片大小不能超过 5M </template>
        </UploadImgs>
      </el-form-item>
      <el-form-item label="用户姓名" prop="username">
        <el-input v-model="drawerProps.row!.username" clearable placeholder="请填写用户姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="drawerProps.row!.gender" clearable placeholder="请选择性别">
          <el-option v-for="item in genderType" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="身份证号" prop="idCard">
        <el-input v-model="drawerProps.row!.idCard" clearable placeholder="请填写身份证号"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="drawerProps.row!.email" clearable placeholder="请填写邮箱"></el-input>
      </el-form-item>
      <el-form-item label="居住地址" prop="address">
        <el-input v-model="drawerProps.row!.address" clearable placeholder="请填写居住地址"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit">确定</el-button>
    </template>
  </el-drawer>
</template>

<script lang="ts" name="UserDrawer" setup>
import { reactive, ref } from "vue";
import { genderType } from "@/utils/dict";
import { ElMessage, FormInstance } from "element-plus";
import { User } from "@/api/interface";
import UploadImg from "@/components/Upload/Img.vue";
import UploadImgs from "@/components/Upload/Imgs.vue";

const rules = reactive({
  avatar: [{ required: true, message: "请上传用户头像" }],
  photo: [{ required: true, message: "请上传用户照片" }],
  username: [{ required: true, message: "请填写用户姓名" }],
  gender: [{ required: true, message: "请选择性别" }],
  idCard: [{ required: true, message: "请填写身份证号" }],
  email: [{ required: true, message: "请填写邮箱" }],
  address: [{ required: true, message: "请填写居住地址" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  row: Partial<User.ResUserList>;
  api?: (params: any) => Promise<any>;
  getTableList?: () => void;
}

const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  row: {}
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params;
  drawerVisible.value = true;
};

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    try {
      await drawerProps.value.api!(drawerProps.value.row);
      ElMessage.success({ message: `${drawerProps.value.title}用户成功！` });
      drawerProps.value.getTableList!();
      drawerVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  });
};

defineExpose({
  acceptParams
});
</script>
