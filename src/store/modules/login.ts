import { defineStore } from 'pinia'
import { store } from '../index'
import { ref } from 'vue'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'
export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const userInfo = ref<object>({})
  const userMenus = ref<string[]>([])
  const accountLoginAction = async (payload: IAccount) => {
    // 1.实现登录逻辑
    const loginResult = await accountLoginRequest(payload)
    token.value = loginResult.data.token
    localCache.setCache('token', token.value)
    // 2.请求用户信息
    const { id } = loginResult.data
    const userInfoResult = await requestUserInfoById(id)
    // console.log('userInfoResult', userInfoResult)
    userInfo.value = userInfoResult.data
    localCache.setCache('userInfo', userInfo.value)
    // 3.请求用户菜单
    const userMenusResult = await requestUserMenusByRoleId(
      userInfoResult.data.role.id
    )
    userMenus.value = userMenusResult.data
    localCache.setCache('userMenus', userMenus.value)
    // 动态映射路由:
    //   userMenu -> routes,将所有的路由对象放到数组里面
    const routes = mapMenusToRoutes(userMenus.value)
    //   将routes -> router.main.children
    routes.forEach((route) => {
      router.addRoute('main', route)
    })
    // console.log('userMenus', userMenus)
    // 4.登录后跳到首页
    router.push('/main')
  }
  // 页面刷新,数据持久化
  const loadLocalLogin = () => {
    const newToken = localCache.getCache('token')
    if (newToken) {
      token.value = newToken
    }
    const newUserInfo = localCache.getCache('userInfo')
    if (newUserInfo) {
      userInfo.value = newUserInfo
    }
    const newUserMenus = localCache.getCache('userMenus')
    if (newUserMenus) {
      userMenus.value = newUserMenus
    }
  }
  return {
    token,
    userInfo,
    userMenus,
    accountLoginAction,
    loadLocalLogin
  }
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}
