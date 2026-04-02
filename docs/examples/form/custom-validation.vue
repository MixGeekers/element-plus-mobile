<template>
  <DemoBlock>
    <div class="demo-block__section">
      <strong>校验流程</strong>
      <p>密码确认会立即校验，年龄则会在失焦后进行异步校验。</p>
    </div>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      status-icon
      @submit.prevent
    >
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          autocomplete="new-password"
          placeholder="请输入密码"
          show-password
          type="password"
        />
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
          autocomplete="new-password"
          placeholder="请再次输入密码"
          show-password
          type="password"
        />
      </el-form-item>

      <el-form-item label="年龄" prop="age">
        <el-input
          v-model.number="ruleForm.age"
          autocomplete="off"
          inputmode="numeric"
          placeholder="请输入 18 岁及以上年龄"
        />
      </el-form-item>

      <el-form-item>
        <div class="demo-block__actions">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

import type { FormInstance, FormRules } from 'element-plus-mobile'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入年龄'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字'))
    } else {
      if (value < 18) {
        callback(new Error('年龄必须大于等于 18 岁'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
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
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error('两次输入的密码不一致'))
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
