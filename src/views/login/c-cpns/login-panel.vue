<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <!-- tabs切换 -->
    <div class="tabs">
      <el-tabs class="demo-tabs" type="border-card" stretch v-model="actionsName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /> </el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <paneAccount></paneAccount>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <panePhone></panePhone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="LoginBtn">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import paneAccount from './pane-account.vue'
import panePhone from './pane-phone.vue'

const actionsName = ref('account')
const isRemPwd = ref(false)

function LoginBtn() {
  if (actionsName.value === 'account') {
    console.log('user')
  } else {
    console.log('phone')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
