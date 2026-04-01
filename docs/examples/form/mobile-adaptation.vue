<template>
  <div class="mobile-form-doc-demo">
    <div class="mobile-form-doc-demo__copy">
      <div class="mobile-form-doc-demo__title">Mobile Form Preview</div>
      <p class="mobile-form-doc-demo__desc">
        This preview renders the second batch of form components directly in
        their mobile layout, including touch-sized controls and mobile Select /
        SelectV2 flows.
      </p>
    </div>

    <div class="mobile-form-doc-demo__stage">
      <div class="mobile-device">
        <div class="mobile-device__status">
          <span>9:41</span>
          <span>Mobile</span>
        </div>

        <div class="mobile-device__header">
          <div>
            <strong>Campaign Brief</strong>
            <span>Form fields from the mobile-adapted batch.</span>
          </div>
          <el-tag size="small" type="primary">Mobile UX</el-tag>
        </div>

        <div class="mobile-device__body">
          <el-form
            ref="formRef"
            mobile
            :model="form"
            :rules="rules"
            label-width="auto"
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
                mobile
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
                mobile
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
              <el-segmented
                v-model="form.channel"
                :options="channelOptions"
                block
              />
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
                <el-radio
                  v-for="item in sourceOptions"
                  :key="item"
                  :value="item"
                >
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
              <div class="mobile-form-doc-demo__actions">
                <el-button type="primary" @click="submitForm">Submit</el-button>
                <el-button @click="resetForm">Reset</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

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

<style scoped lang="scss">
.mobile-form-doc-demo {
  display: grid;
  gap: 1rem;

  &__copy {
    max-width: 40rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &__desc {
    margin: 0.35rem 0 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--el-text-color-secondary);
  }

  &__stage {
    display: flex;
    justify-content: center;
    padding: 1.25rem;
    border-radius: 1.5rem;
    background:
      radial-gradient(circle at top, rgb(14 165 233 / 0.12), transparent 45%),
      linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
  }

  &__actions {
    display: flex;
    width: 100%;
    gap: 0.75rem;
  }
}

.mobile-device {
  width: min(100%, 24rem);
  border-radius: 2rem;
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 0.08);
  background: #ffffff;
  box-shadow:
    0 1.5rem 3rem rgb(15 23 42 / 0.12),
    0 0.5rem 1rem rgb(15 23 42 / 0.08);

  &__status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem 0.5rem;
    font-size: 0.75rem;
    color: #475569;
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0 1rem 1rem;
    border-bottom: 1px solid rgb(148 163 184 / 0.16);

    strong {
      display: block;
      font-size: 1rem;
      color: #0f172a;
    }

    span {
      display: block;
      margin-top: 0.25rem;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #64748b;
    }
  }

  &__body {
    padding: 1rem;
    background: linear-gradient(
      180deg,
      rgb(248 250 252 / 0.7),
      rgb(255 255 255 / 1)
    );
  }
}

.mobile-form-doc-demo {
  :deep(.el-form-item) {
    display: block;
    margin-bottom: 1.25rem;
  }

  :deep(.el-form-item__label-wrap) {
    display: block;
  }

  :deep(.el-form-item__label) {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
    padding-right: 0;
    justify-content: flex-start;
    text-align: left;
    line-height: var(--el-font-line-height-primary);
  }

  :deep(.el-form-item__content) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    line-height: normal;
  }

  :deep(.el-form-item__error) {
    position: static;
    display: block;
    padding-top: 0.375rem;
    line-height: var(--el-font-line-height-primary);
  }

  :deep(.el-input),
  :deep(.el-input-number),
  :deep(.el-select) {
    width: 100%;
  }

  :deep(.el-input__wrapper) {
    min-height: 2.75rem;
    padding: 1px calc(0.875rem - 1px);
  }

  :deep(.el-input__inner) {
    font-size: 1rem;
  }

  :deep(.el-textarea__inner) {
    min-height: 6rem;
    padding: 0.625rem 0.875rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  :deep(.el-select__wrapper) {
    min-height: 2.75rem;
    padding: 0.375rem 0.875rem;
    gap: 0.5rem;
  }

  :deep(.el-select__selection) {
    gap: 0.5rem;
  }

  :deep(.el-select__selected-item) {
    align-items: center;
    min-height: 2rem;
  }

  :deep(.el-select__input) {
    height: 2rem;
    font-size: 1rem;
  }

  :deep(.el-checkbox-group),
  :deep(.el-radio-group) {
    display: flex;
    flex-wrap: wrap;
  }

  :deep(.el-checkbox),
  :deep(.el-radio) {
    align-items: flex-start;
    min-height: 2.75rem;
    height: auto;
    margin-right: 1rem;
    white-space: normal;
  }

  :deep(.el-checkbox__inner) {
    width: 1.125rem;
    height: 1.125rem;
  }

  :deep(.el-checkbox__inner::after) {
    width: 0.25rem;
    height: 0.5rem;
  }

  :deep(.el-radio__inner) {
    width: 1.125rem;
    height: 1.125rem;
  }

  :deep(.el-radio__inner::after) {
    width: 0.5rem;
    height: 0.5rem;
  }

  :deep(.el-checkbox__label),
  :deep(.el-radio__label) {
    padding-left: 0.75rem;
    line-height: 1.4;
  }

  :deep(.el-switch) {
    min-height: 2.75rem;
    gap: 0.625rem;
  }

  :deep(.el-switch__label) {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    line-height: normal;
  }

  :deep(.el-switch__core) {
    min-width: 3.25rem;
    height: 2rem;
    border-radius: 1rem;
  }

  :deep(.el-switch__core .el-switch__inner) {
    height: 1.75rem;
    padding: 0 0.5rem 0 1.875rem;
  }

  :deep(.el-switch__core .el-switch__action) {
    width: 1.75rem;
    height: 1.75rem;
  }

  :deep(.el-switch.is-checked .el-switch__core .el-switch__action) {
    left: calc(100% - 1.8125rem);
  }

  :deep(.el-switch.is-checked .el-switch__core .el-switch__inner) {
    padding: 0 1.875rem 0 0.5rem;
  }

  :deep(.el-slider) {
    min-height: 2.75rem;
  }

  :deep(.el-slider.el-slider--with-input) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  :deep(.el-slider__runway) {
    height: 0.375rem;
  }

  :deep(.el-slider__runway.show-input) {
    margin-right: 0;
  }

  :deep(.el-slider__input) {
    width: 100%;
  }

  :deep(.el-slider__button-wrapper) {
    width: 2.25rem;
    height: 2.25rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :deep(.el-slider__button) {
    width: 1.25rem;
    height: 1.25rem;
  }

  :deep(.el-rate) {
    min-height: 2.75rem;
  }

  :deep(.el-rate__item) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.25rem;
    min-height: 2.25rem;
  }

  :deep(.el-rate__icon) {
    font-size: 1.375rem;
    margin-right: 0.375rem;
  }

  :deep(.el-segmented) {
    font-size: 0.9375rem;
  }

  :deep(.el-segmented__item) {
    min-height: 2.75rem;
    padding: 0 0.875rem;
  }

  :deep(.el-button) {
    flex: 1;
    min-height: 2.75rem;
  }
}

@media (max-width: 640px) {
  .mobile-form-doc-demo__stage {
    padding: 0.75rem;
  }
}
</style>
