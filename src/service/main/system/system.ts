import hyRequest from "@/service"

/**   用户的网络请求 */
export function postUserListData(queryInfo:any){
 return hyRequest.post({
    url:'/users/list',
    data:queryInfo
 })
 }

export function deleteUserById(id:number){
  return hyRequest.delete({
    url: `/user/${id}`
  })
}
