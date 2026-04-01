<template>
  <footer :class="[ns.b(), ns.is('fixed', fixed)]" :style="style">
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

interface FooterProps {
  /**
   * @description height of the footer
   */
  height?: string | null
  /**
   * @description whether to fix the footer at the bottom of the viewport
   */
  fixed?: boolean
}

defineOptions({
  name: 'ElFooter',
})
const props = withDefaults(defineProps<FooterProps>(), {
  height: null,
  fixed: false,
})

const ns = useNamespace('footer')

const style = computed(
  () =>
    (props.height
      ? ns.cssVarBlock({ height: props.height })
      : {}) as CSSProperties
)
</script>
