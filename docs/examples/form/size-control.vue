<template>
  <DemoBlock>
    <div class="demo-block__section">
      <div class="demo-block__caption">组件尺寸</div>
      <el-segmented v-model="size" :options="sizeOptions" block />
    </div>

    <el-form :model="sizeForm" :size="size" @submit.prevent>
      <el-form-item label="活动名称">
        <el-input
          v-model="sizeForm.name"
          clearable
          placeholder="请输入活动名称"
        />
      </el-form-item>

      <el-form-item label="活动区域">
        <el-select
          v-model="sizeForm.region"
          clearable
          filterable
          placeholder="请选择区域"
        >
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="上线日期">
        <el-date-picker
          v-model="sizeForm.date1"
          aria-label="选择日期"
          placeholder="请选择日期"
          type="date"
        />
      </el-form-item>

      <el-form-item label="上线时间">
        <el-time-picker
          v-model="sizeForm.date2"
          aria-label="选择时间"
          placeholder="请选择时间"
        />
      </el-form-item>

      <el-form-item label="活动类型">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox value="线上活动" name="type"> 线上活动 </el-checkbox>
          <el-checkbox value="促销活动" name="type"> 促销活动 </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="资源类型">
        <el-radio-group v-model="sizeForm.resource">
          <el-radio value="赞助">赞助</el-radio>
          <el-radio value="场地">场地</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <div class="demo-block__actions">
          <el-button type="primary" @click="onSubmit">创建</el-button>
          <el-button>取消</el-button>
        </div>
      </el-form-item>
    </el-form>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

import type { ComponentSize, SegmentedOption } from 'element-plus-mobile'

const size = ref<ComponentSize>('default')
const sizeOptions: SegmentedOption[] = [
  { label: '大', value: 'large' },
  { label: '中', value: 'default' },
  { label: '小', value: 'small' },
]

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>
