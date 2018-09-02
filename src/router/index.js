import Vue from 'vue'
import Router from 'vue-router'


import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import Personage from '../pages/Personage/Personage.vue'
import Recommend from '../pages/Recommend/Recommend.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Wyyx from '../pages/Wyyx/Wyyx.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Email from '../pages/Email/Email.vue'
import Iphone from '../pages/Iphone/Iphone.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/wyyx'
    },
    {
      path: '/wyyx',
      component: Wyyx,
    },
    {
      path: '/classify',
      component: Classify,
      // chirdens:
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/personage',
      component: Personage,
    },
    {
      path: '/recommend',
      component: Recommend,
    },
    {
      path: '/shopping',
      component: Shopping,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/login',
      component: Login,

    },
    {
      path: '/iphone',
      component: Iphone,

    },
    {
      path: '/email',
      component: Email,

    }
  ]
})
