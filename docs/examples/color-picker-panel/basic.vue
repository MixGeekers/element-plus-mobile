<template>
  <DemoBlock>
    <div class="demo-block__stack color-panel-demo">
      <div class="demo-block__section">
        <span class="demo-block__caption">颜色面板</span>
        <el-color-picker-panel v-model="color" show-alpha />
        <p>当前值：{{ color }}</p>
      </div>

      <div class="color-panel-demo__result">
        <div class="color-panel-demo__swatch" :style="{ background: color }" />
        <span>{{ color }}</span>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const color = ref('rgba(64, 158, 255, 0.92)')
</script>

<style scoped lang="scss">
.color-panel-demo__result {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--el-text-color-secondary);
}

.color-panel-demo__swatch {
  width: 2rem;
  height: 2rem;
  border-radius: var(--el-border-radius-base);
  border: 1px solid var(--el-border-color);
}
</style>
