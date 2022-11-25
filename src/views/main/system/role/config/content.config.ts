// import { type IPropList } from '@/store/types'
export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表',
  propList: [
    { prop: 'name', label: '角色名', minWidwh: '100' },
    { prop: 'intro', label: '操作名', minWidwh: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidwh: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidwh: '250',
      slotName: 'updateAt'
    },
    { prop: 'todo', label: '操作', minWidwh: '120', slotName: 'handler' }
  ]
}
