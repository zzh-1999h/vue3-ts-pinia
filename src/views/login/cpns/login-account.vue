<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useUserStore } from '@/store/modules/login'
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('name') ?? ''
})
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 是否需要记住密码
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
        useUserStore().accountLoginAction({ ...account })
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped></style>
