import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
//配置注册路由和映射路由 下载npm i coderwhy -g 插件
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue'),
      children: [

        {
          path: '/main/system/user',
          component: () => import('../views/main/system/user/user.vue')
        },
        {
          path: '/main/system/role',
          component: () => import('../views/main/system/role/role.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})
//导航守卫
router.beforeEach( (to) =>{
  //只有登录成功(token),才能真正进入到main页面
  const token =localCache.getCache(LOGIN_TOKEN)
if(to.path.startsWith('/main') &&!token){
   return '/login'
}

})


export default router
