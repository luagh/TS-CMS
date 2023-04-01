import hyRequest from "@/service"

/**   用户的网络请求 */
export function postUserListData(){
 return hyRequest.post({
    url:'/users/list',
    data:{
      offset:0,
      size:10
    }
 })
 }

