<template>
  <section
    :class="[
      ns.b(),
      ns.is('vertical', isVertical),
      ns.is('horizontal', !isVertical),
      ns.is('full-screen', fullScreen),
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
  /**
   * @description whether the container should take up the full viewport height (100dvh)
   */
  fullScreen?: boolean
}

defineOptions({
  name: 'ElContainer',
})

const props = withDefaults(defineProps<ContainerProps>(), {
  fullScreen: false,
})

const ns = useNamespace('container')

const isVertical = computed(() => props.direction !== 'horizontal')
</script>
