<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import { formConfig } from '@/views/main/system/user/config/search.config'
</script>

<style></style>
