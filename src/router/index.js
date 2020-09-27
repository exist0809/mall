import Vue from 'vue'
import VueRouter from 'vue-router'

// 配置文件
const Home = () => import('../views/home/Home')
const News = () => import('../views/news/News')
const Add = () => import('../views/add/Add')
const Car = () => import('../views/car/Car')
const Self = () => import('../views/self/Self')

// 安装插件
Vue.use(VueRouter)

// 创建路由对象
const routes = [
  {path:'',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/news',component:News},
  {path:'/add',component:Add},
  {path:'/car',component:Car},
  {path:'/self',component:Self},
]
const router = new VueRouter({
  routes,

  // 设置路由显示为history模式
  mode:'history'
})

// 导出路由
export default router