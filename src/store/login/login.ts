import { defineStore } from 'pinia'
import { accountLoginRequest, getUserInfoById } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'


const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo:{}
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      const name = loginResult.data.name
      this.token = loginResult.data.token

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      //3获取登录用户的详细信息(roLe信息)
     const userInfoResult= await getUserInfoById(id)
       this.userInfo =userInfoResult.data


      //页面跳转
      router.push('/main')
    }



    }

})

export default useLoginStore
