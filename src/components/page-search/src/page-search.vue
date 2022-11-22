<template>
  <div>
    <zzhForm v-bind="props.formConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </zzhForm>
  </div>
</template>

<script setup lang="ts">
import zzhForm from '@/base-ui/form'
import { ref } from 'vue'
const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
})
const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
