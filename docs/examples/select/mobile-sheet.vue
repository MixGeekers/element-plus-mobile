<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">单选</span>
        <el-select
          v-model="region"
          clearable
          filterable
          placeholder="请选择地区"
        >
          <el-option
            v-for="item in regionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <p class="select-demo__summary">当前值：{{ region || '未选择' }}</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">多选</span>
        <el-select
          v-model="owners"
          clearable
          collapse-tags
          collapse-tags-tooltip
          filterable
          multiple
          placeholder="请选择团队"
        >
          <el-option
            v-for="item in ownerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <p class="select-demo__summary">
          已确认：{{ owners.length ? owners.join('、') : '未确认' }}
        </p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const region = ref('')
const owners = ref<string[]>([])

const regionOptions = [
  { label: '华北', value: 'north' },
  { label: '华东', value: 'east' },
  { label: '华南', value: 'south' },
  { label: '西南', value: 'west' },
]

const ownerOptions = [
  { label: '运营', value: 'operations' },
  { label: '设计', value: 'design' },
  { label: '内容', value: 'content' },
  { label: '销售', value: 'sales' },
  { label: '客服', value: 'support' },
  { label: '技术', value: 'engineering' },
]
</script>

<style scoped lang="scss">
.select-demo__summary {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--el-text-color-secondary);
}
</style>
