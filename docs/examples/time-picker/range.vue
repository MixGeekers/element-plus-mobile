<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">工作班次</span>
        <strong>选择开始时间与结束时间</strong>
        <el-time-picker
          v-model="value1"
          is-range
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
        <p>两个端点会始终保持在同一组视觉区域中，更便于快速浏览。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">客服时段</span>
        <strong>通过第二组范围管理其他时间安排</strong>
        <el-time-picker
          v-model="value2"
          is-range
          format="HH:mm"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
        <p>在编辑可用时段时，24 小时制通常会更清晰。</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 8, 40),
  new Date(2016, 9, 10, 9, 40),
])
const value2 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 10, 0),
  new Date(2016, 9, 10, 18, 0),
])
</script>
