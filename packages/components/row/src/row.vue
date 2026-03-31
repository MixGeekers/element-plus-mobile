<template>
  <component :is="tag" :class="rowKls" :style="style">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import { pxToRem } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { rowContextKey } from './constants'

import type { CSSProperties } from 'vue'
import type { RowProps } from './row'

defineOptions({
  name: 'ElRow',
})

const props = withDefaults(defineProps<RowProps>(), {
  tag: 'div',
  gutter: 0,
  justify: 'start',
})

const ns = useNamespace('row')
const gutter = computed(() => props.gutter)

provide(rowContextKey, {
  gutter,
})

const style = computed(() => {
  const styles: CSSProperties = {}
  if (!props.gutter) {
    return styles
  }

  styles.marginRight = styles.marginLeft = pxToRem((props.gutter / 2) * -1)
  return styles
})

const rowKls = computed(() => [
  ns.b(),
  ns.is(`justify-${props.justify}`, props.justify !== 'start'),
  ns.is(`align-${props.align}`, !!props.align),
])
</script>
