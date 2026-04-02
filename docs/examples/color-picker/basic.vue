<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">主色</span>
        <div class="color-picker-demo__row">
          <div
            class="color-picker-demo__preview"
            :style="{ background: color1 }"
          />
          <div class="color-picker-demo__meta">
            <span>{{ color1 }}</span>
          </div>
          <el-color-picker v-model="color1" />
        </div>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">辅助色</span>
        <div class="color-picker-demo__row">
          <div
            class="color-picker-demo__preview"
            :style="{ background: color2 || 'var(--el-fill-color)' }"
          />
          <div class="color-picker-demo__meta">
            <span>{{ color2 || '暂未选择' }}</span>
          </div>
          <el-color-picker v-model="color2" />
        </div>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const color1 = ref('#409EFF')
const color2 = ref('')
</script>

<style scoped lang="scss">
.color-picker-demo__row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.75rem;
  align-items: center;
}

.color-picker-demo__preview {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--el-border-radius-base);
  border: 1px solid var(--el-border-color);
  box-shadow: inset 0 0 0 1px var(--el-bg-color);
}

.color-picker-demo__meta {
  display: grid;
  min-width: 0;

  span {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--el-text-color-primary);
    word-break: break-all;
  }
}
</style>
