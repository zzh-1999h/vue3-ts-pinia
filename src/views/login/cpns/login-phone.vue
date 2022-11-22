<template>
  <div>
    <div class="login-phone" :model="phone" :rules="rules">
      <el-form label-width="60px">
        <el-form-item label="手机号" prop="num">
          <el-input v-model="phone.num" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <div class="get-code">
            <el-input v-model="phone.code" />
            <el-button type="primary" class="get-btn">获取验证码</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { rules } from '../config/phone-config'
const phone = reactive({
  num: '',
  code: ''
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
