import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import(/* webpackChunkName: "about" */ '../views/prijava.vue')
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import(/* webpackChunkName: "about" */ '../views/registracija.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forum.vue')
  },
  {
    path: '/tema/:id',
    name: 'Tema',
    component: () => import('../views/Tema.vue')
  },
  {
    path: '/novaTema',
    name: 'novaTema',
    component: () => import('../views/novaTema.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
