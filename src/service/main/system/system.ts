import hyRequest from "@/service"

/**   用户的网络请求 基于第三方库 hyRequest 实现的 */
export function postUserListData(queryInfo:any){
 return hyRequest.post({
    url:'/users/list',
    data:queryInfo
 })
 }

/**   删除用户的网络请求 */
export function deleteUserById(id:number){
  return hyRequest.delete({
    url: `/user/${id}`
  })
}

/**   新增的网络请求 */
export function newUserData(userInfo:any){
  return hyRequest.post({
    url:'/users',
    data:userInfo
  })
}

export function editUserData (id:number,userInfo:any){
  return hyRequest.patch({
    url:`/users/${id}`,
    data:userInfo
  })
}


/* 针对任何页面的网络请求（传不同的pagename）：增删改查 */
export function postPageListData(pageName:string,queryInfo:any){
  return hyRequest.post({
    url: `/${pageName}/list`,
    data:queryInfo
  })
}

export function deletePageById(pageName:string,id:number){
  return hyRequest.delete({
    url:`/${pageName}/${id}`
  })
}
