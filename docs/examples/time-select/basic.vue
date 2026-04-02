<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">提货时段</span>
        <strong>从固定排班中直接选择</strong>
        <el-time-select
          v-model="value"
          end="18:30"
          placeholder="请选择时间"
          start="08:30"
          step="00:15"
        />
        <p>当业务只支持固定时段时，固定时段选择器会比自由时间输入更清晰。</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value = ref('')
</script>
