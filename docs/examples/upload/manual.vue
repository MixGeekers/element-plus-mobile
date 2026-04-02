<template>
  <el-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <el-button type="primary">选择文件</el-button>
    </template>

    <el-button class="ml-3" type="success" @click="submitUpload">
      上传到服务器
    </el-button>

    <template #tip>
      <div class="el-upload__tip">支持上传 500KB 以内的 JPG 或 PNG 文件</div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadInstance } from 'element-plus-mobile'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
