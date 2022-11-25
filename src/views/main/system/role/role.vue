<template>
  <div class="role">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
</script>

<style scoped></style>
