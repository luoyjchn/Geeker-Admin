<template>
  <div class="upload content-box">
    <!-- 多图上传 -->
    <div class="card img-box">
      <span class="text">多图片上传组件 🍓🍇🍈🍉</span>
      <div class="upload-list">
        <UploadImgs v-model:file-list="fileList" :drag="false" border-radius="50%">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
          <template #tip> 圆形组件，图片最大为 5M（禁止拖拽上传） </template>
        </UploadImgs>
        <UploadImgs v-model:file-list="fileList1" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
          <template #tip> 长方形组件（可拖拽上传） </template>
        </UploadImgs>
      </div>
      <el-descriptions :column="1" border title="配置项 📚（其它参数和单图上传组件相同）">
        <el-descriptions-item label="fileList">
          双向绑定的 fileList 值，使用示例： v-model:file-list="fileList"
        </el-descriptions-item>
        <el-descriptions-item label="limit"> 最大图片上传数，默认为 5 张 </el-descriptions-item>
      </el-descriptions>
    </div>
    <!-- 单图上传 -->
    <div class="card img-box">
      <span class="text">单图片上传组件 🍓🍇🍈🍉</span>
      <div class="upload-list">
        <UploadImg v-model:image-url="avatar1" :file-size="3">
          <template #tip> 上传图片最大为 3M </template>
        </UploadImg>
        <UploadImg v-model:image-url="avatar2" :drag="false" border-radius="50%">
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
          <template #tip> 圆形组件（禁止拖拽上传） </template>
        </UploadImg>
        <UploadImg v-model:image-url="avatar3" width="250px">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传 Banner 图</span>
          </template>
          <template #tip> 长方形组件（可拖拽上传） </template>
        </UploadImg>
        <UploadImg v-model:image-url="avatar4" disabled>
          <template #tip> 无图（禁用上传） </template>
        </UploadImg>
        <UploadImg v-model:image-url="avatar5" disabled>
          <template #tip> 有图（禁用编辑、删除） </template>
        </UploadImg>
      </div>
      <el-descriptions :column="1" border title="配置项 📚">
        <el-descriptions-item label="imageUrl">
          双向绑定的 imageUrl 值，使用示例： v-model:image-url="avatar"
        </el-descriptions-item>
        <el-descriptions-item label="api">
          上传图片的 api 方法，一般项目上传都是同一个 api 方法，在组件里直接引入即可（非必传）
        </el-descriptions-item>
        <el-descriptions-item label="drag"> 是否支持拖拽上传图片，默认为 true </el-descriptions-item>
        <el-descriptions-item label="disabled"> 是否禁用 上传、删除 功能，可查看图片 </el-descriptions-item>
        <el-descriptions-item label="fileSize"> 单个图片文件大小限制，默认为 5M </el-descriptions-item>
        <el-descriptions-item label="fileType">
          图片类型限制，默认类型为 ["image/jpeg", "image/png", "image/gif"]
        </el-descriptions-item>
        <el-descriptions-item label="height"> 组件高度样式，默认为 "150px" </el-descriptions-item>
        <el-descriptions-item label="width"> 组件宽度样式，默认为 "150px" </el-descriptions-item>
        <el-descriptions-item label="borderRadius"> 组件边框圆角样式，默认为 "8px" </el-descriptions-item>
      </el-descriptions>
    </div>

    <!-- 表单使用 -->
    <div class="form-box">
      <div class="card">
        <el-alert
          :closable="false"
          class="mb20"
          effect="dark"
          title="图片上传组件在 form 表单中使用，上传之后成功会自动重新校验"
          type="warning"
        />
        <el-form ref="ruleFormRef" :model="fromModel" :rules="rules" label-suffix=" :" label-width="100px">
          <el-form-item label="用户头像" prop="avatar">
            <UploadImg v-model:image-url="fromModel.avatar" :file-size="3" height="135px" width="135px">
              <template #empty>
                <el-icon><Avatar /></el-icon>
                <span>请上传头像</span>
              </template>
              <template #tip> 头像大小不能超过 3M </template>
            </UploadImg>
          </el-form-item>
          <el-form-item label="用户照片" prop="photo">
            <UploadImgs v-model:file-list="fromModel.photo" :limit="3" border-radius="50%" height="140px" width="140px">
              <template #empty>
                <el-icon><Picture /></el-icon>
                <span>请上传照片</span>
              </template>
              <template #tip> 最多上传 3 张照片 </template>
            </UploadImgs>
          </el-form-item>
          <el-form-item label="用户姓名" prop="username">
            <el-input v-model="fromModel.username" clearable placeholder="请填写用户姓名"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idCard">
            <el-input v-model="fromModel.idCard" clearable placeholder="请填写身份证号"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="fromModel.email" clearable placeholder="请填写邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button> 取消 </el-button>
            <el-button type="primary" @click="submit"> 确定 </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="card">
        <el-alert
          :closable="false"
          class="mb20"
          effect="dark"
          title="图片上传组件在 form 表单中使用，如果该表单禁用，则上传组件会自动禁用"
          type="warning"
        />
        <el-form :model="fromModel1" disabled label-suffix=" :" label-width="100px">
          <el-form-item label="用户头像" prop="avatar">
            <UploadImg v-model:image-url="fromModel1.avatar" :file-size="3" height="135px" width="135px">
              <template #empty>
                <el-icon><Avatar /></el-icon>
                <span>请上传头像</span>
              </template>
              <template #tip> 头像大小不能超过 3M </template>
            </UploadImg>
          </el-form-item>
          <el-form-item label="用户照片" prop="photo">
            <UploadImgs v-model:file-list="fromModel1.photo" border-radius="50%" height="140px" width="140px">
              <template #empty>
                <el-icon><Picture /></el-icon>
                <span>请上传照片</span>
              </template>
              <template #tip> 照片大小不能超过 5M </template>
            </UploadImgs>
          </el-form-item>
          <el-form-item label="用户姓名" prop="username">
            <el-input v-model="fromModel1.username" clearable placeholder="请填写用户姓名"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idCard">
            <el-input v-model="fromModel1.idCard" clearable placeholder="请填写身份证号"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="fromModel1.email" clearable placeholder="请填写邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button> 取消 </el-button>
            <el-button type="primary" @click="submit"> 确定 </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" name="uploadFile" setup>
import { reactive, ref } from "vue";
import { FormInstance } from "element-plus";
import UploadImg from "@/components/Upload/Img.vue";
import UploadImgs from "@/components/Upload/Imgs.vue";

const fileList = ref([{ name: "img", url: "https://i.imgtg.com/2023/01/16/QRBHS.jpg" }]);
const fileList1 = ref([]);

const avatar1 = ref("");
const avatar2 = ref("");
const avatar3 = ref("");
const avatar4 = ref("");
const avatar5 = ref("https://i.imgtg.com/2023/01/16/QRqMK.jpg");

const rules = reactive({
  avatar: [{ required: true, message: "请上传用户头像" }],
  photo: [{ required: true, message: "请上传用户照片" }],
  username: [{ required: true, message: "请填写用户姓名" }],
  idCard: [{ required: true, message: "请填写身份证号" }],
  email: [{ required: true, message: "请填写邮箱" }]
});

const fromModel = ref({
  avatar: "",
  photo: [{ name: "img", url: "https://i.imgtg.com/2023/01/16/QR57a.jpg" }],
  username: "",
  idCard: "",
  email: ""
});
const fromModel1 = ref({
  avatar: "",
  photo: [{ name: "img", url: "https://i.imgtg.com/2023/01/16/QR57a.jpg" }],
  username: "",
  idCard: "",
  email: ""
});
const ruleFormRef = ref<FormInstance>();
const submit = () => {
  ruleFormRef.value!.validate(valid => {
    console.log(valid);
  });
};
</script>

<style lang="scss" scoped>
@use "./index";
</style>
