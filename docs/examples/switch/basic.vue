<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">系统通知</span>
        <strong>使用默认主题色切换状态</strong>
        <el-switch v-model="value1" />
        <p>默认尺寸已经保留足够的触控面积，不需要额外包裹额外样式。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">营销提醒</span>
        <strong>通过 Element Plus 颜色变量定制状态色</strong>
        <el-switch
          v-model="value2"
          style="
            --el-switch-on-color: var(--el-color-success);
            --el-switch-off-color: var(--el-color-danger);
          "
        />
        <p>需要定制状态色时，优先使用 `--el-color-*` 变量以兼容深色模式。</p>
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
