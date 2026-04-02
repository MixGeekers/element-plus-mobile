<template>
  <el-cascader :props="props" />
</template>

<script lang="ts" setup>
import type { CascaderProps } from 'element-plus-mobile'

let id = 0
const props: CascaderProps = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map(() => ({
        value: ++id,
        label: `选项 ${id}`,
        leaf: level >= 2,
      }))
      // 调用 `resolve` 返回子节点数据，并标记当前加载结束。
      resolve(nodes)
    }, 1000)
  },
}
</script>
