// import { type IPropList } from '@/store/types'
export const contentTableConfig = {
  showIndexColumn: false,
  showSelectColumn: false,
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidwh: '100' },
    { prop: 'type', label: '类型', minWidwh: '60' },
    { prop: 'url', label: '菜单url', minWidwh: '60' },
    { prop: 'icon', label: '菜单icon', minWidwh: '60' },
    { prop: 'permission', label: '按钮权限', minWidwh: '60' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidwh: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidwh: '220',
      slotName: 'updateAt'
    },
    { prop: 'todo', label: '操作', minWidwh: '120', slotName: 'handler' }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
