<template>
  <DemoBlock>
    <div class="demo-block__section">
      <span class="demo-block__caption">插槽内容</span>
      <strong>在圆点里放入自定义字符</strong>
      <el-switch v-model="value1">
        <template #active-action>
          <span class="custom-action-badge">开</span>
        </template>
        <template #inactive-action>
          <span class="custom-action-badge">关</span>
        </template>
      </el-switch>
      <p>插槽内容建议保持为一个字或一个图标，避免圆点内挤压变形。</p>
    </div>
  </DemoBlock>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref(true)
</script>

<style scoped>
.custom-action-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  color: var(--el-text-color-primary);
}
</style>
