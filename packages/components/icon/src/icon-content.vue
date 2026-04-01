<template>
  <IconifyIcon
    v-if="iconifyIcon"
    :icon="iconifyIconValue"
    v-bind="$attrs"
    :class="contentKls"
  />
  <component
    :is="resolvedComponent"
    v-else-if="resolvedComponent"
    v-bind="$attrs"
    :class="contentKls"
  />
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, resolveDynamicComponent } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'
import { useNamespace } from '@element-plus/hooks'
import {
  iconPropType,
  isIconifyIconData,
  isIconifyIconName,
  isIconifyIconNameObject,
  isIconifyIconSource,
  stringifyIconifyIconName,
} from '@element-plus/utils'

import type { IconifyIcon as IconifyIconData } from '@element-plus/utils'

defineOptions({
  name: 'ElIconContent',
  inheritAttrs: false,
})

const props = defineProps({
  icon: {
    type: iconPropType,
  },
})

const ns = useNamespace('icon')
const instance = getCurrentInstance()

const camelize = (value: string) =>
  value.replace(/-(\w)/g, (_, letter: string) => letter.toUpperCase())

const capitalize = (value: string) =>
  value ? value[0].toUpperCase() + value.slice(1) : value

const hyphenate = (value: string) =>
  value.replace(/\B([A-Z])/g, '-$1').toLowerCase()

const resolveRegisteredComponent = (name: string) => {
  const components = instance?.appContext.components
  if (!components) return undefined

  const camelizedName = camelize(name)
  const pascalName = capitalize(camelizedName)
  const kebabName = hyphenate(name)

  return (
    components[name] ||
    components[camelizedName] ||
    components[pascalName] ||
    components[kebabName]
  )
}

const iconifyIcon = computed<string | IconifyIconData | undefined>(() => {
  const icon = props.icon
  if (isIconifyIconNameObject(icon)) {
    return stringifyIconifyIconName(icon)
  }

  return isIconifyIconData(icon) || isIconifyIconName(icon) ? icon : undefined
})
const iconifyIconValue = computed(() => iconifyIcon.value as any)
const resolvedComponent = computed(() => {
  const icon = props.icon
  if (!icon || isIconifyIconSource(icon)) return undefined
  if (typeof icon === 'string') {
    return resolveRegisteredComponent(icon) || resolveDynamicComponent(icon)
  }

  return icon
})
const contentKls = computed(() => [
  ns.e('content'),
  isIconifyIconSource(props.icon) && ns.em('content', 'iconify'),
])
</script>
