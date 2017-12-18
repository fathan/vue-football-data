import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'

Vue.use(Router)

const routing = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default routing
