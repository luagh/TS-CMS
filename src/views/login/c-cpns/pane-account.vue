<template>
  <div class="pane-account">
    <el-form label-width="60px">
      <el-form-item label="账号">
        <el-input />
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.pane-account {
  color: #000;
}
</style>
