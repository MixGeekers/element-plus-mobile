<template>
  <DemoBlock>
    <div class="demo-block__stack upload-mobile">
      <div class="demo-block__section">
        <span class="demo-block__caption">图片附件</span>
        <strong>更大的触发按钮、明确的数量限制和易读的文件列表</strong>
        <el-upload
          v-model:file-list="fileList"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          :before-remove="beforeRemove"
          :limit="3"
          :on-exceed="handleExceed"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <el-button class="upload-mobile__trigger" type="primary">
            选择图片
          </el-button>
          <template #tip>
            <div class="el-upload__tip">
              建议上传 500KB 以内的 JPG 或 PNG 图片，更适合移动网络环境。
            </div>
          </template>
        </el-upload>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus-mobile'
import DemoBlock from '../components/demo-block.vue'

import type { UploadProps, UploadUserFile } from 'element-plus-mobile'

const fileList = ref<UploadUserFile[]>([
  {
    name: '品牌标识.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: '备用标识.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `最多上传 3 个文件，本次选择了 ${files.length} 个，当前共 ${
      files.length + uploadFiles.length
    } 个。`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `确定取消上传 ${uploadFile.name} 吗？`,
    '提示'
  ).then(
    () => true,
    () => false
  )
}
</script>

<style scoped lang="scss">
.upload-mobile__trigger {
  width: 100%;
}
</style>
