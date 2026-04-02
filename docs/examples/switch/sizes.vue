<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">large</span>
        <strong>适合关键设置项或老年模式</strong>
        <el-switch
          v-model="largeValue"
          size="large"
          active-text="开启"
          inactive-text="关闭"
        />
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">default</span>
        <strong>推荐作为表单的默认尺寸</strong>
        <el-switch
          v-model="defaultValue"
          active-text="开启"
          inactive-text="关闭"
        />
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">small</span>
        <strong>在紧凑信息区中使用，但仍保留足够的触控面积</strong>
        <el-switch
          v-model="smallValue"
          size="small"
          active-text="开启"
          inactive-text="关闭"
        />
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const largeValue = ref(true)
const defaultValue = ref(true)
const smallValue = ref(true)
</script>
