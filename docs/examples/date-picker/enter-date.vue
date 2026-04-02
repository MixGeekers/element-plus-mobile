<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">首选日期</span>
        <strong>选择主要配送日期</strong>
        <el-date-picker
          v-model="value1"
          clearable
          type="date"
          placeholder="请选择配送日期"
        />
        <p>轻触一次即可打开底部面板，并在页脚完成确认。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">备选方案</span>
        <strong>通过快捷选项减少重复操作</strong>
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="请选择备选日期"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
        />
        <p>这里禁用了未来日期，用于模拟有限预约窗口。</p>
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
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
</script>
