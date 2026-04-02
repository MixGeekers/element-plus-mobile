<template>
  <DemoBlock>
    <div class="demo-block__section">
      <strong>为什么重要</strong>
      <p>
        普通输入框默认先返回字符串，`.number`
        修饰符会在数字规则执行前先完成类型转换。
      </p>
    </div>

    <el-form
      ref="formRef"
      :model="numberValidateForm"
      class="demo-ruleForm"
      @submit.prevent
    >
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须是数字' },
        ]"
      >
        <el-input
          v-model.number="numberValidateForm.age"
          autocomplete="off"
          inputmode="numeric"
          placeholder="请输入年龄"
          type="text"
        />
      </el-form-item>

      <el-form-item>
        <div class="demo-block__actions">
          <el-button type="primary" @click="submitForm(formRef)">
            提交
          </el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

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
