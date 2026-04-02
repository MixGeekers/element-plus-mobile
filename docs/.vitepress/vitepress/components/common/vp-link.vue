<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { normalizeContentPath } from '../../../shared/lang'
import { isExternal } from '../../utils'

const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()

const resolvedHref = computed(() => {
  if (!props.href) return ''
  return isExternal(props.href) ? props.href : normalizeContentPath(props.href)
})
</script>

<template>
  <component
    :is="props.href ? 'a' : 'span'"
    class="link-item"
    :class="{ link: props.href }"
    :href="withBase(resolvedHref)"
    :target="isExternal(props.href) ? '_blank' : undefined"
    :rel="isExternal(props.href) ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <ElIcon v-if="isExternal(props.href) && !props.noIcon">
      <i-ri-external-link-line class="link-icon" />
    </ElIcon>
  </component>
</template>

<style scoped>
.link-item {
  display: flex;
  align-items: center;
}

.el-icon {
  margin-left: 4px;
}
</style>
