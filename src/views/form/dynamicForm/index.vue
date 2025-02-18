<template>
  <div class="card content-box">
    <el-button class="add" plain type="primary" @click="addDomain"> Add Input </el-button>
    <el-form ref="formRef" :model="dynamicValidateForm" class="demo-dynamic" label-width="100px">
      <el-form-item
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change']
          }
        ]"
        label="Email"
        prop="email"
      >
        <el-input v-model="dynamicValidateForm.email" />
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        :label="'Domain' + index"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: 'domain can not be null',
          trigger: 'blur'
        }"
      >
        <el-input v-model="domain.value">
          <template #append>
            <el-button class="mt-2" plain type="danger" @click.prevent="removeDomain(domain)"> Delete </el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)"> Submit </el-button>
        <el-button @click="resetForm(formRef)"> Reset </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" name="dynamicForm" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive<{
  domains: DomainItem[];
  email: string;
}>({
  domains: [
    {
      key: 1,
      value: ""
    }
  ],
  email: ""
});

interface DomainItem {
  key: number;
  value: string;
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1);
  }
};

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: ""
  });
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
@use "./index";
</style>
