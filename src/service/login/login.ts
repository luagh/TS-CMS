import hyRequest from '..'
import type { IAccount } from '@/types'
// import { localCache } from '@/utils/cache'
// import { LOGIN_TOKEN } from '@/global/constants'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

//查询用户权限
export function getUserInfoById(id:number){
  return hyRequest.get({
    url:`/users/${id}`,
    // headers:{
    //   Authorization:'Bearer'+localCache.getCache(LOGIN_TOKEN)
    // }
  })
}