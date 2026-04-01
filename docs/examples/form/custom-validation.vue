<template>
  <MobileFormDemo
    title="Custom Validation Rules"
    description="This example keeps the validation flow mobile-friendly while showing password confirmation and async age checks."
    header-title="Account Security"
    header-description="Two-factor style validation with status icons and touch-sized fields."
  >
    <div class="mobile-form-demo__panel">
      <strong>Validation flow</strong>
      <p>
        Password confirmation is checked immediately, while age is validated
        asynchronously after blur.
      </p>
    </div>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      status-icon
      @submit.prevent
    >
      <el-form-item label="Password" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          autocomplete="new-password"
          placeholder="Enter a password"
          show-password
          type="password"
        />
      </el-form-item>

      <el-form-item label="Confirm" prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
          autocomplete="new-password"
          placeholder="Repeat the password"
          show-password
          type="password"
        />
      </el-form-item>

      <el-form-item label="Age" prop="age">
        <el-input
          v-model.number="ruleForm.age"
          autocomplete="off"
          inputmode="numeric"
          placeholder="Must be 18 or above"
        />
      </el-form-item>

      <el-form-item>
        <div class="mobile-form-demo__actions">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Submit
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

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive<{
  pass: string
  checkPass: string
  age: number | ''
}>({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
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
