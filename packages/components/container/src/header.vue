<template>
  <header :class="[ns.b(), ns.is('fixed', fixed)]" :style="style">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

interface HeaderProps {
  /**
   * @description height of the header
   */
  height?: string | null
  /**
   * @description whether to fix the header at the top of the viewport
   */
  fixed?: boolean
}

defineOptions({
  name: 'ElHeader',
})

const props = withDefaults(defineProps<HeaderProps>(), {
  height: null,
  fixed: false,
})

const ns = useNamespace('header')
const style = computed(() => {
  return props.height
    ? (ns.cssVarBlock({
        height: props.height,
      }) as CSSProperties)
    : {}
})
</script>
