import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home.vue'
import Detail from './pages/detail/Detail'
import City from './pages/city/City';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },{
      path: '/city',
      name: 'city',
      component: City
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
