<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">会面时间</span>
        <strong>在同一流程中选择日期和时间</strong>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="请选择日期和时间"
        />
        <p>底部面板会将两个步骤整合在一条纵向流程中。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">快捷预约</span>
        <strong>针对常见场景使用快捷项</strong>
        <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="请选择日期和时间"
          :shortcuts="shortcuts"
        />
        <p>快捷项能帮助用户以更少点击完成高频预约。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">默认时段</span>
        <strong>预填最常用的时间段</strong>
        <el-date-picker
          v-model="value3"
          type="datetime"
          placeholder="请选择日期和时间"
          :default-time="defaultTime"
        />
        <p>当预约通常在中午附近开始时，预设时间会更加实用。</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setDate(date.getDate() - 1)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setDate(date.getDate() - 7)
      return date
    },
  },
]
</script>
