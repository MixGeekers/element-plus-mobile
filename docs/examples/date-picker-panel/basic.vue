<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">内嵌日历</span>
        <strong>在同一屏内持续查看当前选择</strong>
        <el-date-picker-panel v-model="value" />
        <p>已选日期：{{ selectionLabel }}</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value = ref(new Date())

const formatter = new Intl.DateTimeFormat('zh-CN', {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
})

const selectionLabel = computed(() => formatter.format(value.value))
</script>
