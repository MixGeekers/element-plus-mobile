<template>
  <DemoBlock>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      scroll-to-error
      @submit.prevent
    >
      <el-form-item label="活动名称" prop="name">
        <el-input
          v-model="ruleForm.name"
          clearable
          placeholder="请输入活动名称"
        />
      </el-form-item>

      <el-form-item label="活动区域" prop="region">
        <el-select
          v-model="ruleForm.region"
          clearable
          filterable
          placeholder="请选择区域"
        >
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="参与人数" prop="count">
        <el-select-v2
          v-model="ruleForm.count"
          :options="options"
          placeholder="请选择预期人数"
        />
      </el-form-item>

      <el-form-item label="上线日期" prop="date1">
        <el-date-picker
          v-model="ruleForm.date1"
          aria-label="选择日期"
          placeholder="请选择日期"
          type="date"
        />
      </el-form-item>

      <el-form-item label="上线时间" prop="date2">
        <el-time-picker
          v-model="ruleForm.date2"
          aria-label="选择时间"
          placeholder="请选择时间"
        />
      </el-form-item>

      <el-form-item label="立即配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>

      <el-form-item label="活动地点" prop="location">
        <el-segmented
          v-model="ruleForm.location"
          :options="locationOptions"
          block
        />
      </el-form-item>

      <el-form-item label="活动类型" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox value="线上活动" name="type"> 线上活动 </el-checkbox>
          <el-checkbox value="促销活动" name="type"> 促销活动 </el-checkbox>
          <el-checkbox value="线下活动" name="type"> 线下活动 </el-checkbox>
          <el-checkbox value="品牌曝光" name="type"> 品牌曝光 </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="资源类型" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio value="赞助">赞助</el-radio>
          <el-radio value="场地">场地</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动简介" prop="desc">
        <el-input
          v-model="ruleForm.desc"
          :rows="4"
          maxlength="140"
          placeholder="请描述活动形式"
          show-word-limit
          type="textarea"
        />
      </el-form-item>

      <el-form-item>
        <div class="demo-block__actions">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            创建
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
  name: '活动示例',
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

const locationOptions = ['家里', '公司', '学校']

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度应为 3 到 5 个字符', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: '请选择活动区域',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: '请选择参与人数',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: '请选择日期',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '请选择时间',
      trigger: 'change',
    },
  ],
  location: [
    {
      required: true,
      message: '请选择活动地点',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '请至少选择一种活动类型',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: '请选择资源类型',
      trigger: 'change',
    },
  ],
  desc: [{ required: true, message: '请输入活动简介', trigger: 'blur' }],
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
