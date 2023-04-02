import { getEntireDepartments, getEntireRloes } from "@/service/main/main";
import { defineStore } from "pinia";


interface IMainState{
  entireRoles:any[]
  entireDepartments:any[]
}
const useMainStore =defineStore('main',{
   state: ():IMainState => ({
     entireRoles:[],
     entireDepartments:[]
   }),
   actions :{
   async fetchEntireDataAction (){
      const roleResult =await getEntireRloes()
      const departmentsResult =await getEntireDepartments()

      //  保存数据
      this.entireRoles =roleResult.data.list
      this.entireDepartments =departmentsResult.data.list
    }
   }

})


export default useMainStore
