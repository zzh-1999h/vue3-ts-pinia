<template>
  <div class="zzh-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="props.listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="100"
      ></el-table-column>
      <template v-for="propItem in props.propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          class="el-pagination"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30, 40, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IPropList, IUserList, IRootList } from '@/store/types'
import { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array as PropType<IUserList[] | IRootList[]>,
    required: true
  },
  propList: {
    type: Array as PropType<IPropList[]>,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  listCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['selectionChange', 'update:page'])
const handleSelectionChange = (value: any) => {
  emits('selectionChange', value)
}
const handleSizeChange = (currentPage: number) => {
  emits('update:page', { ...props.page, currentPage })
}
const handleCurrentChange = (pageSize: number) => {
  emits('update:page', { ...props.page, pageSize })
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
