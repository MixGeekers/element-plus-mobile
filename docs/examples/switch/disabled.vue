<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">只读设置</span>
        <strong>已开启但暂不可修改</strong>
        <el-switch v-model="value1" disabled />
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">可编辑设置</span>
        <strong>仍可在当前步骤中修改</strong>
        <el-switch v-model="value2" />
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
