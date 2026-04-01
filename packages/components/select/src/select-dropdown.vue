<template>
  <div :class="[ns.b('dropdown'), ns.is('multiple', isMultiple), popperClass]">
    <div v-if="$slots.header" :class="ns.be('dropdown', 'header')">
      <slot name="header" />
    </div>
    <slot />
    <div v-if="$slots.footer" :class="ns.be('dropdown', 'footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { selectKey } from './token'

export default defineComponent({
  name: 'ElSelectDropdown',

  componentName: 'ElSelectDropdown',

  setup() {
    const select = inject(selectKey)!
    const ns = useNamespace('select')

    // computed
    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)

    return {
      ns,
      popperClass,
      isMultiple,
    }
  },
})
</script>
