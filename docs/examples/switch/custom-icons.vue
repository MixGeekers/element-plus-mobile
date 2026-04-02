<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">外侧图标</span>
        <strong>在开关两侧展示更完整的状态图标</strong>
        <el-switch
          v-model="value1"
          :active-icon="Check"
          :inactive-icon="Close"
        />
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">行内图标</span>
        <strong>在开关内部放入图标，适合更紧凑的列表</strong>
        <el-switch
          v-model="value2"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
        />
      </div>
    </div>
  </DemoBlock>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'
import Check from '~icons/ep/check'
import Close from '~icons/ep/close'

const value1 = ref(true)
const value2 = ref(true)
</script>
