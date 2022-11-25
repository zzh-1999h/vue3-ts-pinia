// import { type IPropList } from '@/store/types'
export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidwh: '80' },
    { prop: 'oldPrice', label: '原价格', minWidwh: '80' },
    { prop: 'newPrice', label: '现价格', minWidwh: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidwh: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidwh: '100', slotName: 'status' },
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
