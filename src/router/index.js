import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
router.beforeEach((to,from,next)=>{
  //to将要访问的路径
  // from代表从哪个路径代转而来
  // next是一个函数，表示放行
  if(to.path==='/login'){
     next()
  }
  const tokenStr = window.sessionStorage.getItem('token')
  if(tokenStr){
     next()
  }else{
    next('/login')
  }


})






export default router