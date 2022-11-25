<template>
  <div class="page-content">
    <zzhTable
      :listData="dataList"
      :listCount="dataCount"
      v-bind="props.contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="default">新建用户</el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handler-btns">
          <el-button size="default" type="primary" class="btn1">编辑</el-button>
          <el-button
            size="default"
            type="primary"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 在pageContent中动态插入剩余插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </zzhTable>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, defineExpose, ref, watch } from 'vue'
import zzhTable from '@/base-ui/table'
import { useSystemStore } from '@/store/modules/system'
import { type IPropList, IContentTableConfig } from '@/store/types'
const props = defineProps({
  contentTableConfig: {
    type: Object as PropType<IContentTableConfig<IPropList[]>>,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => {
  getPageData()
})

// 2.发送网络请求
const getPageData = (queryInfo: any = {}) => {
  useSystemStore().getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()

// const userList = computed(() => useSystemStore().userList)
// console.log('userList', userList)
// 3.获取仓库数据 userList | roleList
const pageListData = (pageName: string) => {
  switch (pageName) {
    case 'user':
      return computed(() => useSystemStore().userList)
    case 'role':
      return computed(() => useSystemStore().roleList)
    case 'goods':
      return computed(() => useSystemStore().goodsList)
    case 'menu':
      return computed(() => useSystemStore().menuList)
  }
}
// const dataList: IRootList[] | IUserList[] = pageListDate(props.pageName)
const dataList: any = pageListData(props.pageName)

// 4.获取 userCount | roleCount
const pageListCount = (pageName: string) => {
  switch (pageName) {
    case 'user':
      return computed(() => useSystemStore().userCount)
    case 'role':
      return computed(() => useSystemStore().roleCount)
    case 'goods':
      return computed(() => useSystemStore().goodsCount)
    case 'menu':
      return computed(() => useSystemStore().menuCount)
  }
}
const dataCount: any = pageListCount(props.pageName)

// 5.获取其它动态插槽名称
const otherPropSlots: any = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (
      item.slotName === 'status' ||
      item.slotName === 'createAt' ||
      item.slotName === 'updateAt' ||
      item.slotName === 'handler'
    ) {
      return false
    } else {
      return true
    }
  }
)

// 6.删除/编辑/新建操作
const handleDeleteClick = (item: any) => {
  useSystemStore().deletePageDataAction({
    pageName: props.pageName,
    id: item.id
  })
}

defineExpose({
  getPageData
})
</script>

<style scoped lang="less">
.btn1 {
  margin-left: 10px;
}
</style>
