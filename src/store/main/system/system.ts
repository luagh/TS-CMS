import { deletePageById, deleteUserById, editUserData, newUserData, postPageListData, postUserListData } from '@/service/main/system/system'
import { defineStore} from 'pinia'
import type { ISystemState } from './type'


const  useSystemStore =defineStore('system',{
  state: ():ISystemState => ( {
    usersList:[],
    usersTotalCount:0,
    pageList:[],
    pageTotalCount:0
  }),
  actions: {
  async   postUsersListAction (queryInfo:any){
  const usersListResult =await postUserListData(queryInfo)
  const { totalCount,list} =usersListResult.data
  this.usersTotalCount = totalCount
  this.usersList = list
 },
 async deleteUserByIdAction(id :number){
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
    },
    async editUserDataAction (id:number,userInfo:any){
  //更新用户数据
      const editResult =await editUserData(id,userInfo)
      console.log(editResult);

       //  重新请求数据
     this.postUsersListAction({offset:0,size:10})
    },
    /*  针对页面的网络请求：增删改查  */
  async postPageListAction (pageName:string,queryInfo:any){
    const pageListResult =await postPageListData(pageName,queryInfo)
     const { totalCount,list} =pageListResult.data

     this.pageList=list
     this.pageTotalCount=totalCount
  },
  async deletePageByIdAction (pageName:string,id:number){
    const deleteResult =await deletePageById(pageName,id)
    console.log(deleteResult)
    this.postPageListAction(pageName,{offset:0,size:10})
  }




    }
})

export default useSystemStore
