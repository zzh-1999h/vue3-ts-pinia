// import { ISystemState } from './types'
// import { IRootState } from './types'
import { store } from '../index'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPageListData, deletePageData } from '@/service/main/system/system'
import { type IUserList, IRootList } from '../types'
export const useSystemStore = defineStore('system', () => {
  const userList = ref<IUserList[]>([])
  const userCount = ref<number>()
  const roleList = ref<IRootList[]>([])
  const roleCount = ref<number>()
  const goodsList = ref<string[]>([])
  const goodsCount = ref<number>(0)
  const menuList = ref<string[]>([])
  const menuCount = ref<number>(0)
  const getPageListAction = async (payload: any) => {
    // 1.获取pageUrl
    const pageName = payload.pageName
    let pageUrl = ''
    if (pageName === 'user') {
      pageUrl = '/users/list'
      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data
      userList.value = list
      userCount.value = totalCount
    } else if (pageName === 'role') {
      pageUrl = '/role/list'
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      roleList.value = list
      roleCount.value = totalCount
    } else if (pageName === 'goods') {
      pageUrl = '/goods/list'
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      goodsList.value = list
      goodsCount.value = totalCount
    } else if (pageName === 'menu') {
      pageUrl = '/menu/list'
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      menuList.value = list
      menuCount.value = totalCount
    }
  }
  const deletePageDataAction = async (payload: any) => {
    // 1.获取pageName和id
    // pageName -> /users
    // id -> /users/id
    const { pageName, id } = payload
    const pageUrl = `/${pageName}/${id}`
    // 2.调用删除网络请求
    await deletePageData(pageUrl)
    // 3.重新请求最新数据
    getPageListAction({ pageName, queryInfo: { offset: 0, size: 10 } })
  }
  return {
    userList,
    userCount,
    roleList,
    roleCount,
    getPageListAction,
    goodsList,
    goodsCount,
    menuList,
    menuCount,
    deletePageDataAction
  }
})

// Need to be used outside the setup
export function useSystemStoreWithOut() {
  return useSystemStore(store)
}
