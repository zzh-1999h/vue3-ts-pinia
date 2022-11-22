<template>
  <div class="nav-header">
    <Operation
      class="fold-menu"
      style="width: 1em; height: 1em; margin-right: 8px"
      @click="handleFoldClick"
    />
    <div class="content">
      <div><zzhBreadCrumb :breadcrumbs="breadcrumbs" /></div>
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './user-info.vue'
import zzhBreadCrumb from '@/base-ui/breadcrumb'
import { useUserStore } from '@/store/modules/login'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
const isFold = ref(false)
const emit = defineEmits(['foldChange'])
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

// 面包屑的数据: [{name: , path:}]
const breadcrumbs = computed(() => {
  const route = useRoute()
  const currentPath = route.path
  const userMenus = useUserStore().userMenus
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
