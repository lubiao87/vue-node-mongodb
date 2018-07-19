import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TransfromViews from '@/views/transfromViews'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transfromViews',
      component:TransfromViews,
      // children:[
      //   {
      //     path:'login',
      //     name:'login',
      //     component:Login
      //   }
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component:Login,
    }
  ]
})
