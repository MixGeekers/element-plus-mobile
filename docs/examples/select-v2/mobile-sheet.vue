<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">单选</span>
        <el-select-v2
          v-model="segment"
          :options="segmentOptions"
          filterable
          placeholder="请选择分组"
        />
        <p class="select-v2-demo__summary">当前值：{{ segment || '未选择' }}</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">多选</span>
        <el-select-v2
          v-model="stores"
          :options="storeOptions"
          collapse-tags
          filterable
          multiple
          placeholder="请选择门店"
        />
        <p class="select-v2-demo__summary">
          已确认：{{ stores.length ? `${stores.length} 项` : '未确认' }}
        </p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const segment = ref('')
const stores = ref<string[]>([])

const segmentOptions = Array.from({ length: 40 }).map((_, index) => ({
  value: `分组 ${index + 1}`,
  label: `分组 ${index + 1}`,
}))

const storeOptions = Array.from({ length: 300 }).map((_, index) => ({
  value: `门店 ${index + 1}`,
  label: `门店 ${index + 1}`,
}))
</script>

<style scoped lang="scss">
.select-v2-demo__summary {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--el-text-color-secondary);
}
</style>
