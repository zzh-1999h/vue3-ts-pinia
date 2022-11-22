<template>
  <div class="zzh-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in props.formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IformItem } from '../types'
import { ref, watch } from 'vue'
const props = defineProps({
  formItems: {
    type: Array as PropType<IformItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyles: {
    type: Object,
    default: () => ({ padding: '10px 30px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >192px 4个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  },
  modelValue: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])
// const formData = computed({
//   get: () => props.modelValue,
//   set: (newValue) => emits('update:modelValue', newValue)
// })
const formData = ref({ ...props.modelValue })
watch(
  () => formData,
  (newValue) => {
    emits('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<style scoped lang="less">
.zzh-form {
  padding-top: 22px;
}
</style>
