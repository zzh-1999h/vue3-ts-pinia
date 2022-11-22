// import { createRouter, createWebHistory } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'
// import localCache from '@/utils/cache'
// // import { firstMenu } from '@/utils/map-menus'
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     redirect: '/main'
//   },
//   {
//     path: '/login',
//     component: () => import('@/views/login/login.vue')
//   },
//   {
//     path: '/main',
//     component: () => import('@/views/main/main.vue')
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     component: () => import('@/views/not-found/not-found.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// router.beforeEach((to) => {
//   if (to.path !== '/login') {
//     const token = localCache.getCache('token')
//     if (!token) {
//       return '/login'
//     }
//   }
//   // console.log(router.getRoutes());
//   // console.log(to);

//   // if (to.path === '/main') {
//   //   return firstMenu.url
//   // }
// })
// export default router
