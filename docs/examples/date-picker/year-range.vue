<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">规划区间</span>
        <strong>选择起始年份与结束年份</strong>
        <el-date-picker
          v-model="value1"
          type="yearrange"
          range-separator="至"
          start-placeholder="开始年份"
          end-placeholder="结束年份"
        />
        <p>年份范围选择会始终保持在单列堆叠布局中。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">快捷切换</span>
        <strong>通过常用规划周期快速选择</strong>
        <el-date-picker
          v-model="value2"
          type="yearrange"
          range-separator="至"
          start-placeholder="开始年份"
          end-placeholder="结束年份"
          :shortcuts="shortcuts"
        />
        <p>这类预设区间适用于年度规划或归档筛选。</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref()
const value2 = ref()

const shortcuts = [
  {
    text: '今年',
    value: [new Date(), new Date()],
  },
  {
    text: '最近十年',
    value: () => {
      const end = new Date()
      const start = new Date(
        new Date().setFullYear(new Date().getFullYear() - 10)
      )
      return [start, end]
    },
  },
  {
    text: '未来五十年',
    value: () => {
      const start = new Date()
      const end = new Date(
        new Date().setFullYear(new Date().getFullYear() + 50)
      )
      return [start, end]
    },
  },
]
</script>
