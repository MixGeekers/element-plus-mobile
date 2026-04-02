<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">起床时间</span>
        <strong>选择单个时间点</strong>
        <el-time-picker v-model="value1" clearable placeholder="请选择时间" />
        <p>时间列表可纵向滚动，并在页脚完成确认。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">睡眠模式开始</span>
        <strong>在强调清晰度时使用 24 小时制</strong>
        <el-time-picker
          v-model="value2"
          format="HH:mm"
          placeholder="请选择时间"
        />
        <p>第二个输入项展示了多个时间字段如何保持整齐堆叠。</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref()
const value2 = ref()
</script>
