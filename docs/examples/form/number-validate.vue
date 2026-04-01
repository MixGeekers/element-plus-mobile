<template>
  <MobileFormDemo
    title="Number Validate"
    description="The number modifier example is shown in the same mobile shell, so the field, hint, and actions can be checked in a realistic narrow layout."
    header-title="Numeric Input"
    header-description="Use the .number modifier so validation receives a numeric value instead of a string."
  >
    <div class="mobile-form-demo__panel">
      <strong>Why it matters</strong>
      <p>
        Typing into a normal input returns a string first. The `.number`
        modifier converts that value before the numeric rule runs.
      </p>
    </div>

    <el-form
      ref="formRef"
      :model="numberValidateForm"
      class="demo-ruleForm"
      @submit.prevent
    >
      <el-form-item
        label="Age"
        prop="age"
        :rules="[
          { required: true, message: 'age is required' },
          { type: 'number', message: 'age must be a number' },
        ]"
      >
        <el-input
          v-model.number="numberValidateForm.age"
          autocomplete="off"
          inputmode="numeric"
          placeholder="Enter your age"
          type="text"
        />
      </el-form-item>

      <el-form-item>
        <div class="mobile-form-demo__actions">
          <el-button type="primary" @click="submitForm(formRef)">
            Submit
          </el-button>
          <el-button @click="resetForm(formRef)">Reset</el-button>
        </div>
      </el-form-item>
    </el-form>
  </MobileFormDemo>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import MobileFormDemo from './components/mobile-demo-shell.vue'

import type { FormInstance } from 'element-plus-mobile'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive<{
  age: number | ''
}>({
  age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
