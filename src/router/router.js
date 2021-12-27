import Vue from 'vue'
import VueRouter from 'vue-router'
import registration from '../views/registration.vue'
import rout_guard from './rout-guard.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: () => import('../views/tasks.vue'),
    beforeEnter: rout_guard
  },
  {
    path: '/regregistration',
    name: 'registration',
    component: registration,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
