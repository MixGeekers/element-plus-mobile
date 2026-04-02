<template>
  <el-space>
    <el-text>默认使用 span</el-text>
    <el-text tag="p">这里是一段段落文本。</el-text>
    <el-text tag="b">加粗强调</el-text>
    <el-text tag="i">斜体说明</el-text>
    <el-text>
      这里带有
      <el-text tag="sub" size="small">下标</el-text>
    </el-text>
    <el-text>
      这里带有
      <el-text tag="sup" size="small">上标</el-text>
    </el-text>
    <el-text tag="ins">插入内容</el-text>
    <el-text tag="del">删除内容</el-text>
    <el-text tag="mark">高亮标记</el-text>
  </el-space>
</template>
