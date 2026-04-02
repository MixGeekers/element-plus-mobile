<template>
  <DemoBlock>
    <div class="demo-block__section">
      <strong>动态校验</strong>
      <p>
        每个新增域名都会保留自己的校验规则，删除操作也与最终提交按钮保持分离。
      </p>
    </div>

    <el-form
      ref="formRef"
      :model="dynamicValidateForm"
      class="demo-dynamic"
      @submit.prevent
    >
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input
          v-model="dynamicValidateForm.email"
          clearable
          placeholder="请输入邮箱，例如 owner@example.com"
        />
      </el-form-item>

      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        :label="`域名 ${index + 1}`"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: '域名不能为空',
          trigger: 'blur',
        }"
      >
        <div class="demo-block__stack">
          <el-input
            v-model="domain.value"
            placeholder="请输入域名，例如 campaign.example.com"
          />
          <el-button plain @click.prevent="removeDomain(domain)">
            删除域名
          </el-button>
        </div>
      </el-form-item>

      <el-form-item>
        <div class="demo-block__stack">
          <el-button @click="addDomain">新增域名</el-button>
          <div class="demo-block__actions">
            <el-button type="primary" @click="submitForm(formRef)">
              提交
            </el-button>
            <el-button @click="resetForm(formRef)">重置</el-button>
          </div>
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
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
  })
}

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
