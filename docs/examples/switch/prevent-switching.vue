<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">校验通过</span>
        <strong>满足条件后再真正切换</strong>
        <el-switch
          v-model="value1"
          :loading="loading1"
          :before-change="beforeChange1"
        />
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">校验失败</span>
        <strong>返回 false 或拒绝 Promise 会阻止切换</strong>
        <el-switch
          v-model="value2"
          :loading="loading2"
          :before-change="beforeChange2"
        />
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus-mobile'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref(false)
const value2 = ref(false)
const loading1 = ref(false)
const loading2 = ref(false)

const beforeChange1 = (): Promise<boolean> => {
  loading1.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false
      ElMessage.success('设置已保存')
      return resolve(true)
    }, 1000)
  })
}

const beforeChange2 = (): Promise<boolean> => {
  loading2.value = true
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false
      ElMessage.error('当前条件不允许切换')
      return reject(new Error('Error'))
    }, 1000)
  })
}
</script>
