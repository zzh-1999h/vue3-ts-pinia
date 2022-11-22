<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>账号登陆</span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>手机登录</span>
        </template>
        <loginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import loginPhone from './login-phone.vue'
import loginAccount from './login-account.vue'
import { ref } from 'vue'
const isKeepPassword = ref<boolean>(true)
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()
const currentTab = ref<string>('account')

const handleLogin = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    console.log('待完善...')
  }
}
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 120px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
