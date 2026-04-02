<template>
  <DemoBlock>
    <el-form :model="form" @submit.prevent>
      <el-form-item label="活动名称">
        <el-input v-model="form.name" clearable placeholder="请输入活动名称" />
      </el-form-item>

      <el-form-item label="活动区域">
        <el-select
          v-model="form.region"
          clearable
          filterable
          placeholder="请选择一个区域"
        >
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="上线日期">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="请选择日期"
        />
      </el-form-item>

      <el-form-item label="上线时间">
        <el-time-picker v-model="form.date2" placeholder="请选择时间" />
      </el-form-item>

      <el-form-item label="立即配送">
        <el-switch v-model="form.delivery" />
      </el-form-item>

      <el-form-item label="活动类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="线上活动" name="type"> 线上活动 </el-checkbox>
          <el-checkbox value="促销活动" name="type"> 促销活动 </el-checkbox>
          <el-checkbox value="线下活动" name="type"> 线下活动 </el-checkbox>
          <el-checkbox value="品牌曝光" name="type"> 品牌曝光 </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="资源类型">
        <el-radio-group v-model="form.resource">
          <el-radio value="赞助">赞助</el-radio>
          <el-radio value="场地">场地</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动简介">
        <el-input
          v-model="form.desc"
          :rows="4"
          maxlength="120"
          placeholder="请描述参与者将获得什么体验"
          show-word-limit
          type="textarea"
        />
      </el-form-item>

      <el-form-item>
        <div class="demo-block__actions">
          <el-button type="primary" @click="onSubmit">创建</el-button>
          <el-button>取消</el-button>
        </div>
      </el-form-item>
    </el-form>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import DemoBlock from '../components/demo-block.vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
