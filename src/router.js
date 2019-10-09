import Vue from 'vue'
import Router from 'vue-router'

import Dogs from '@/views/Dogs.vue'
import Dog from '@/views/Dog.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "index",
    component: Dogs,
  }]
})
