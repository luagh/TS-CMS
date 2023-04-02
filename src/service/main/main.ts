import hyRequest from "..";

//角色
export function getEntireRloes (){

  return hyRequest.post({
    url:'/role/list'
  })
}

// 部门
export function getEntireDepartments(){

  return hyRequest.post({
    url:'/department/list'
  })
}
