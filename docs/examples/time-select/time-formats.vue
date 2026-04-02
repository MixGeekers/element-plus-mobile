<template>
  <DemoBlock>
    <div class="demo-block__section">
      <span class="demo-block__caption">中文格式</span>
      <strong>把固定时段格式化为更符合页面语境的文本</strong>
      <el-time-select
        v-model="value"
        start="00:00"
        step="00:30"
        end="23:59"
        placeholder="请选择时间"
        format="HH[时]mm[分]"
      />
      <p>当页面整体是中文内容时，时间格式也应和页面语言保持一致。</p>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value = ref('')
</script>
