<template>
  <DemoBlock>
    <div class="demo-block__section">
      <span class="demo-block__caption">动作图标</span>
      <strong>根据状态切换操作图标</strong>
      <el-switch
        v-model="value1"
        :active-action-icon="View"
        :inactive-action-icon="Hide"
      />
      <p>圆点内的图标会跟随状态同步变化，适合用来表达可见性或权限。</p>
    </div>
  </DemoBlock>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'
import Hide from '~icons/ep/hide'
import View from '~icons/ep/view'

const value1 = ref(true)
</script>
