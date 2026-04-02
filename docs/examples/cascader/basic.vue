<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">服务路径</span>
        <strong>逐级轻触展开选项</strong>
        <el-cascader
          v-model="value"
          clearable
          filterable
          :options="options"
          placeholder="请选择服务类型"
        />
        <p>{{ selectionText }}</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const value = ref<string[]>([])

const selectionText = computed(() =>
  value.value.length
    ? `已选择：${value.value.join(' / ')}`
    : '展开后会自动滚动到当前的最新一列。'
)

const options = [
  {
    value: '到家服务',
    label: '到家服务',
    children: [
      {
        value: '即时配送',
        label: '即时配送',
        children: [
          {
            value: '当日送达',
            label: '当日送达',
          },
          {
            value: '预约送达',
            label: '预约送达',
          },
        ],
      },
      {
        value: '到店服务',
        label: '到店服务',
        children: [
          {
            value: '预订餐位',
            label: '预订餐位',
          },
          {
            value: '现场排队',
            label: '现场排队',
          },
        ],
      },
    ],
  },
  {
    value: '居家养护',
    label: '居家养护',
    children: [
      {
        value: '清洁保养',
        label: '清洁保养',
        children: [
          {
            value: '每周上门',
            label: '每周上门',
          },
          {
            value: '深度清洁',
            label: '深度清洁',
          },
        ],
      },
      {
        value: '维修支持',
        label: '维修支持',
        children: [
          {
            value: '水管维修',
            label: '水管维修',
          },
          {
            value: '电路检修',
            label: '电路检修',
          },
        ],
      },
    ],
  },
  {
    value: '健康管理',
    label: '健康管理',
    children: [
      {
        value: '运动课程',
        label: '运动课程',
        children: [
          {
            value: '私教指导',
            label: '私教指导',
          },
          {
            value: '团课预约',
            label: '团课预约',
          },
        ],
      },
      {
        value: '咨询服务',
        label: '咨询服务',
        children: [
          {
            value: '到店咨询',
            label: '到店咨询',
          },
          {
            value: '远程咨询',
            label: '远程咨询',
          },
        ],
      },
    ],
  },
]
</script>
