import { getEntireDepartments, getEntireMenus, getEntireRloes } from "@/service/main/main";
import { defineStore } from "pinia";


interface IMainState{
  entireRoles:any[]
  entireDepartments:any[]
  entireMenus:any[]
}
const useMainStore =defineStore('main',{
   state: ():IMainState => ({
     entireRoles:[],
     entireDepartments:[],
     entireMenus:[]
   }),
   actions :{
   async fetchEntireDataAction (){
      const roleResult =await getEntireRloes()
      const departmentsResult =await getEntireDepartments()
      const menuResult =await getEntireMenus()
      //  保存数据
      this.entireRoles =roleResult.data.list
      this.entireDepartments =departmentsResult.data.list
      this.entireMenus =menuResult.data.list

    }
   }

})


export default useMainStore
