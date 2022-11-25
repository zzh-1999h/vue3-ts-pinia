<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image style="width: 60px; height: 60px" :src="scope.row.imgUrl">
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
</script>

<style scoped></style>
