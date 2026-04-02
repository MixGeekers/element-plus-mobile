<template>
  <DemoBlock>
    <div class="demo-block__section">
      <span class="demo-block__caption">字符串值</span>
      <strong>切换时直接输出业务值</strong>
      <el-switch
        v-model="value"
        style="
          --el-switch-on-color: var(--el-color-success);
          --el-switch-off-color: var(--el-color-danger);
        "
        active-value="100"
        inactive-value="0"
      />
      <p>当前绑定值：{{ value }}</p>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value = ref('100')
</script>
