<template>
  <div>
    <zzhForm v-bind="props.formConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">搜索</el-button>
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
const emits = defineEmits(['handleResetClick', 'handleQueryClick'])
// 1.formData属性应该动态决定
const formItems = props.formConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)

// 2.当用户点击重置
const handleResetClick = () => {
  formData.value = formOriginData
  emits('handleResetClick')
}

// 3.用户点击搜索
const handleQueryClick = () => {
  emits('handleQueryClick', formData.value)
}
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
