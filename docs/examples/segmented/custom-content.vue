<template>
  <div>
    <el-segmented v-model="value" :options="options">
      <template #default="scope">
        <div class="flex flex-col items-center gap-2 p-2">
          <el-icon size="20">
            <component :is="scope.item.icon" />
          </el-icon>
          <div>{{ scope.item.label }}</div>
        </div>
      </template>
    </el-segmented>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Apple from '~icons/ep/apple'
import Cherry from '~icons/ep/cherry'
import Grape from '~icons/ep/grape'
import Orange from '~icons/ep/orange'
import Pear from '~icons/ep/pear'
import Watermelon from '~icons/ep/watermelon'

const value = ref('Apple')

const options = [
  {
    label: 'Apple',
    value: 'Apple',
    icon: Apple,
  },
  {
    label: 'Cherry',
    value: 'Cherry',
    icon: Cherry,
  },
  {
    label: 'Grape',
    value: 'Grape',
    icon: Grape,
  },
  {
    label: 'Orange',
    value: 'Orange',
    icon: Orange,
  },
  {
    label: 'Pear',
    value: 'Pear',
    icon: Pear,
  },
  {
    label: 'Watermelon',
    value: 'Watermelon',
    icon: Watermelon,
  },
]
</script>
