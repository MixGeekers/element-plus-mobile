<template>
  <section
    :class="[
      ns.b(),
      ns.is('vertical', isVertical),
      ns.is('horizontal', !isVertical),
    ]"
  >
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'

interface ContainerProps {
  /**
   * @description layout direction for child elements
   */
  direction?: 'horizontal' | 'vertical'
}

defineOptions({
  name: 'ElContainer',
})

const props = defineProps<ContainerProps>()

const ns = useNamespace('container')

const isVertical = computed(() => props.direction !== 'horizontal')
</script>
