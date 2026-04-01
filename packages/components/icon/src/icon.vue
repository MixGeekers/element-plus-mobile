<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot v-if="$slots.default" />
    <el-icon-content v-else-if="icon" :icon="icon" />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { pxToRem } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import ElIconContent from './icon-content.vue'

import type { CSSProperties } from 'vue'
import type { IconProps } from './icon'

defineOptions({
  name: 'ElIcon',
  inheritAttrs: false,
})
const props = defineProps<IconProps>()
const ns = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  const fontSize = pxToRem(size)
  if (!fontSize && !color) return {}

  return {
    fontSize,
    '--color': color,
  }
})
</script>
