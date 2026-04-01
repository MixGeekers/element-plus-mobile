<template>
  <MobileFormDemo
    title="Touch Form Example"
    description="This preview renders the current default form behavior directly, including stacked fields, touch-sized controls, and the bottom-sheet Select / SelectV2 flow."
    header-title="Campaign Brief"
    header-description="Form fields from the current touch-first batch."
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      scroll-to-error
      @submit.prevent
    >
      <el-form-item label="Campaign name" prop="name">
        <el-input
          v-model="form.name"
          clearable
          placeholder="Name your campaign"
        />
      </el-form-item>

      <el-form-item label="Region" prop="region">
        <el-select
          v-model="form.region"
          clearable
          filterable
          placeholder="Pick one region"
        >
          <el-option
            v-for="item in regionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Audience" prop="audience">
        <el-select-v2
          v-model="form.audience"
          :options="audienceOptions"
          collapse-tags
          filterable
          multiple
          placeholder="Choose audience segments"
        />
      </el-form-item>

      <el-form-item label="Budget" prop="budget">
        <el-input-number
          v-model="form.budget"
          :min="50"
          :max="5000"
          :step="50"
          controls-position="right"
        />
      </el-form-item>

      <el-form-item label="Launch now">
        <el-switch v-model="form.launchNow" />
      </el-form-item>

      <el-form-item label="Primary channel" prop="channel">
        <el-segmented v-model="form.channel" :options="channelOptions" block />
      </el-form-item>

      <el-form-item label="Placement tags" prop="tags">
        <el-checkbox-group v-model="form.tags">
          <el-checkbox
            v-for="item in tagOptions"
            :key="item"
            :value="item"
            name="placement-tags"
          >
            {{ item }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Traffic source" prop="source">
        <el-radio-group v-model="form.source">
          <el-radio v-for="item in sourceOptions" :key="item" :value="item">
            {{ item }}
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Confidence">
        <el-slider v-model="form.confidence" show-input />
      </el-form-item>

      <el-form-item label="Priority">
        <el-rate v-model="form.priority" allow-half />
      </el-form-item>

      <el-form-item label="Summary" prop="summary">
        <el-input
          v-model="form.summary"
          :rows="4"
          maxlength="140"
          placeholder="What should this campaign accomplish?"
          show-word-limit
          type="textarea"
        />
      </el-form-item>

      <el-form-item>
        <div class="mobile-form-demo__actions">
          <el-button type="primary" @click="submitForm">Submit</el-button>
          <el-button @click="resetForm">Reset</el-button>
        </div>
      </el-form-item>
    </el-form>
  </MobileFormDemo>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import MobileFormDemo from './components/mobile-demo-shell.vue'

import type { FormInstance, FormRules } from 'element-plus-mobile'

interface CampaignForm {
  name: string
  region: string
  audience: string[]
  budget: number
  launchNow: boolean
  channel: string
  tags: string[]
  source: string
  confidence: number
  priority: number
  summary: string
}

const formRef = ref<FormInstance>()
const form = reactive<CampaignForm>({
  name: '',
  region: '',
  audience: [],
  budget: 600,
  launchNow: true,
  channel: 'Search',
  tags: [],
  source: '',
  confidence: 45,
  priority: 3.5,
  summary: '',
})

const regionOptions = [
  { label: 'North America', value: 'north-america' },
  { label: 'Europe', value: 'europe' },
  { label: 'Japan', value: 'japan' },
  { label: 'South East Asia', value: 'sea' },
]

const audienceOptions = Array.from({ length: 120 }).map((_, index) => ({
  value: `Segment ${index + 1}`,
  label: `Segment ${index + 1}`,
}))

const channelOptions = ['Search', 'Feed', 'Live']
const tagOptions = ['Retargeting', 'Launch', 'Seasonal', 'Brand lift']
const sourceOptions = ['Sponsored', 'Organic']

const rules = reactive<FormRules<CampaignForm>>({
  name: [
    {
      required: true,
      message: 'Please enter a campaign name',
      trigger: 'blur',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select one region',
      trigger: 'change',
    },
  ],
  audience: [
    {
      type: 'array',
      required: true,
      message: 'Please choose at least one audience segment',
      trigger: 'change',
    },
  ],
  budget: [
    {
      type: 'number',
      required: true,
      message: 'Please set a budget',
      trigger: 'change',
    },
  ],
  channel: [
    {
      required: true,
      message: 'Please choose a primary channel',
      trigger: 'change',
    },
  ],
  tags: [
    {
      type: 'array',
      required: true,
      message: 'Select at least one placement tag',
      trigger: 'change',
    },
  ],
  source: [
    {
      required: true,
      message: 'Please choose a traffic source',
      trigger: 'change',
    },
  ],
  summary: [
    {
      required: true,
      message: 'Please add a short summary',
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
