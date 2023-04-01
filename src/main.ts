import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'
// //全局注e Lement-pLus:方使和简洁
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'


const app = createApp(App)
// app.use(ElementPlus)
app.use(registerIcons)
app.use(store)
app.use(router)
app.mount('#app')

