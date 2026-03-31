<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { pxToRem } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'

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
