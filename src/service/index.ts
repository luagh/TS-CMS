
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'
//网络请求库 封装 axios，并定义了一些拦截器和工具函数，用于方便地发起网络请求
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //请求携带token
  interceptors:{
    /* //从本地缓存中获取登录用户的 token，并将其添加到请求的 headers 中，
    以此实现携带 token 发送请求的功能。需要注意的是，在添加 token 时，
    我们使用了 ! 运算符来去除 config.headers 可能为 undefined 的情况 */
   requestSuccessFn:(config) =>{
    const token =localCache.getCache(LOGIN_TOKEN)
   if(config.headers && token){
    config.headers!.Authorization ='Bearer'+ token
   }
    return config
   }
  }
})

export default hyRequest
