<template>
  <MobileFormDemo
    title="Validation"
    description="This form keeps validation states readable in a narrow viewport and scrolls to the first error after submit."
    header-title="Launch Checklist"
    header-description="Required fields, grouped choices, and inline error messages."
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      scroll-to-error
      @submit.prevent
    >
      <el-form-item label="Activity name" prop="name">
        <el-input
          v-model="ruleForm.name"
          clearable
          placeholder="Name the launch"
        />
      </el-form-item>

      <el-form-item label="Activity zone" prop="region">
        <el-select
          v-model="ruleForm.region"
          clearable
          filterable
          placeholder="Choose a zone"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="Activity count" prop="count">
        <el-select-v2
          v-model="ruleForm.count"
          :options="options"
          placeholder="Pick the expected attendance"
        />
      </el-form-item>

      <el-form-item label="Launch date" prop="date1">
        <el-date-picker
          v-model="ruleForm.date1"
          aria-label="Pick a date"
          placeholder="Pick a date"
          type="date"
        />
      </el-form-item>

      <el-form-item label="Launch time" prop="date2">
        <el-time-picker
          v-model="ruleForm.date2"
          aria-label="Pick a time"
          placeholder="Pick a time"
        />
      </el-form-item>

      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>

      <el-form-item label="Activity location" prop="location">
        <el-segmented
          v-model="ruleForm.location"
          :options="locationOptions"
          block
        />
      </el-form-item>

      <el-form-item label="Activity type" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            Offline activities
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Resources" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio value="Sponsorship">Sponsorship</el-radio>
          <el-radio value="Venue">Venue</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Activity brief" prop="desc">
        <el-input
          v-model="ruleForm.desc"
          :rows="4"
          maxlength="140"
          placeholder="Describe the activity format"
          show-word-limit
          type="textarea"
        />
      </el-form-item>

      <el-form-item>
        <div class="mobile-form-demo__actions">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Create
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </div>
      </el-form-item>
    </el-form>
  </MobileFormDemo>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import MobileFormDemo from './components/mobile-demo-shell.vue'

import type { FormInstance, FormRules } from 'element-plus-mobile'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  location: string
  type: string[]
  resource: string
  desc: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: [],
  resource: '',
  desc: '',
})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  location: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 120 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
