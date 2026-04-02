<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    :target="disabled || !href ? undefined : target"
    @click="handleClick"
  >
    <el-icon v-if="icon"><el-icon-content :icon="icon" /></el-icon>
    <span v-if="$slots.default" :class="ns.e('inner')">
      <slot />
    </span>

    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import ElIconContent from '@element-plus/components/icon/src/icon-content.vue'
import { useGlobalConfig } from '@element-plus/components/config-provider'
import { useNamespace } from '@element-plus/hooks'
import { linkEmits } from './link'

import type { LinkProps } from './link'

defineOptions({
  name: 'ElLink',
})
const props = withDefaults(defineProps<LinkProps>(), {
  type: undefined,
  underline: 'always',
  href: '',
  target: '_self',
})
const emit = defineEmits(linkEmits)
const globalConfig = useGlobalConfig('link')

const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type ?? globalConfig.value?.type ?? 'default'),
  ns.is('disabled', props.disabled),
  ns.is('underline', underline.value === 'always'),
])

const underline = computed(() => {
  return props.underline ?? globalConfig.value?.underline ?? 'always'
})

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>
