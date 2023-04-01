import type { RouteRecordRaw } from "vue-router"

function loadLocalRoutes(){
// 动态获取所有的路由对象，~放到数组中
// 路由对象都在独立的文件中
// 从文件中将所有路由对象先读取数组中
const localRoutes: RouteRecordRaw[]=[]
//读取router/main下所有的ts文件
const files:Record<string,any> =import.meta.glob
(('../router/main/**/*.ts'),{eager:true})
// 将加载的对象放到locaLRoutes
for( const key in files){
  const module =files[key]
  localRoutes.push(module.default)
}
return loadLocalRoutes
}

export function mapMenusToRoutes(userMenus:any[]){

  const localRoutes =loadLocalRoutes()

  const routes: RouteRecordRaw[]=[]
  for(const menu of userMenus){
    for(const submenu of menu.children){
      const route =localRoutes.find((item) => item.path ===submenu.url)
      if(route) routes.push(route)
    }
  }
  return routes
}

