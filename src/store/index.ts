import type { App } from 'vue'
import { createPinia } from 'pinia'
import { useUserStore } from './modules/login'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'
const store = createPinia()
export function setupStore(app: App<Element>) {
  app.use(store)
  useUserStore().loadLocalLogin()
  // 解决页面刷新,动态路由跳转失败
  const routes = mapMenusToRoutes(useUserStore().userMenus)
  // console.log('useUserStore().userMenus', useUserStore().userMenus)
  routes.forEach((route) => {
    router.addRoute('main', route)
  })
}

export { store }
