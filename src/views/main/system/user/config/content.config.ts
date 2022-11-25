// import { type IPropList } from '@/store/types'
export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidwh: '100' },
    { prop: 'realname', label: '真实姓名', minWidwh: '100' },
    { prop: 'cellphone', label: '手机号码', minWidwh: '100' },
    { prop: 'enable', label: '状态', minWidwh: '100', slotName: 'status' },
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
