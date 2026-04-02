<template>
  <DemoBlock>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      scroll-to-error
      @submit.prevent
    >
      <el-form-item label="投放名称" prop="name">
        <el-input v-model="form.name" clearable placeholder="请输入投放名称" />
      </el-form-item>

      <el-form-item label="地区" prop="region">
        <el-select
          v-model="form.region"
          clearable
          filterable
          placeholder="请选择一个地区"
        >
          <el-option
            v-for="item in regionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="受众" prop="audience">
        <el-select-v2
          v-model="form.audience"
          :options="audienceOptions"
          collapse-tags
          filterable
          multiple
          placeholder="请选择受众分组"
        />
      </el-form-item>

      <el-form-item label="预算" prop="budget">
        <el-input-number
          v-model="form.budget"
          :min="50"
          :max="5000"
          :step="50"
          controls-position="right"
        />
      </el-form-item>

      <el-form-item label="立即上线">
        <el-switch v-model="form.launchNow" />
      </el-form-item>

      <el-form-item label="摘要" prop="summary">
        <el-input
          v-model="form.summary"
          :rows="4"
          maxlength="140"
          placeholder="请填写本次投放的目标"
          show-word-limit
          type="textarea"
        />
      </el-form-item>

      <el-form-item>
        <div class="demo-block__actions">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

import type { FormInstance, FormRules } from 'element-plus-mobile'

interface CampaignForm {
  name: string
  region: string
  audience: string[]
  budget: number
  launchNow: boolean
  summary: string
}

const formRef = ref<FormInstance>()
const form = reactive<CampaignForm>({
  name: '',
  region: '',
  audience: [],
  budget: 600,
  launchNow: true,
  summary: '',
})

const regionOptions = [
  { label: '北美', value: 'north-america' },
  { label: '欧洲', value: 'europe' },
  { label: '日本', value: 'japan' },
  { label: '东南亚', value: 'sea' },
]

const audienceOptions = Array.from({ length: 120 }).map((_, index) => ({
  value: `受众分组 ${index + 1}`,
  label: `受众分组 ${index + 1}`,
}))

const rules = reactive<FormRules<CampaignForm>>({
  name: [
    {
      required: true,
      message: '请输入投放名称',
      trigger: 'blur',
    },
  ],
  region: [
    {
      required: true,
      message: '请选择一个地区',
      trigger: 'change',
    },
  ],
  audience: [
    {
      type: 'array',
      required: true,
      message: '请至少选择一个受众分组',
      trigger: 'change',
    },
  ],
  budget: [
    {
      type: 'number',
      required: true,
      message: '请设置预算',
      trigger: 'change',
    },
  ],
  summary: [
    {
      required: true,
      message: '请填写摘要',
      trigger: 'blur',
    },
  ],
})

const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate().catch(() => undefined)
}

const resetForm = () => {
  formRef.value?.resetFields()
}
</script>
