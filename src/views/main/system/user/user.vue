<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @handleResetClick="handleResetClick"
      @handleQueryClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="user"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { formConfig } from '@/views/main/system/user/config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hook/usePageSearch'
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
  .btn1 {
    margin-left: 10px;
  }
}
</style>
