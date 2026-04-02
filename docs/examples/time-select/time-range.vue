<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">开始时间</span>
        <strong>结束时间会随着开始时间自动收窄可选范围</strong>
        <el-time-select
          v-model="startTime"
          :max-time="endTime"
          placeholder="开始时间"
          start="08:30"
          step="00:15"
          end="18:30"
        />
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">结束时间</span>
        <strong>不能早于开始时间，避免生成错误时段</strong>
        <el-time-select
          v-model="endTime"
          :min-time="startTime"
          placeholder="结束时间"
          start="08:30"
          step="00:15"
          end="18:30"
        />
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const startTime = ref('')
const endTime = ref('')
</script>
