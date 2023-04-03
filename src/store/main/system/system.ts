import { deleteUserById, newUserData, postUserListData } from '@/service/main/system/system'
import { defineStore} from 'pinia'
import type { ISystemState } from './type'


const  useSystemStore =defineStore('system',{
  state: ():ISystemState => ( {
    usersList:[],
    usersTotalCount:0
  }),
  actions: {
  async   postUsersListAction (queryInfo:any){
  const usersListResult =await postUserListData(queryInfo)
  const { totalCount,list} =usersListResult.data
  this.usersTotalCount = totalCount
  this.usersList = list
 },
 async delelteUserByIdAction(id :number){
  //删除数据操作
  const deleteResult =await deleteUserById(id)
  console.log(deleteResult);
  //  重新请求数据
   this.postUsersListAction({offset:0,size:10})
 },
    async newUserDataAction(userInfo:any){
    //  创建新的用户
      const newResult =await newUserData(userInfo)
      console.log(newResult);
     //  重新请求数据
     this.postUsersListAction({offset:0,size:10})
    }
    }
})

export default useSystemStore
