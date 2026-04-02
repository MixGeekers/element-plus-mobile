<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">月份范围</span>
        <strong>选择报表周期</strong>
        <el-date-picker
          v-model="value1"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        />
        <p>底部面板会将整套流程保持在同一块纵向区域中。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">常用区间</span>
        <strong>为高频报表提供快捷选项</strong>
        <el-date-picker
          v-model="value2"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          :shortcuts="shortcuts"
        />
        <p>本月、最近六个月这类常用选项能显著降低操作成本。</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: '本月',
    value: [new Date(), new Date()],
  },
  {
    text: '今年',
    value: () => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    },
  },
  {
    text: '最近六个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    },
  },
]
</script>
