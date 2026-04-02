<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">开启中</span>
        <strong>等待远端保存结果</strong>
        <el-switch v-model="value1" loading />
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">关闭中</span>
        <strong>禁用重复操作直到请求完成</strong>
        <el-switch v-model="value2" loading />
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
