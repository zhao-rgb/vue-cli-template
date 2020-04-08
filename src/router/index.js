import Vue from 'vue'
import VueRouter from 'vue-router'
import Card from '../views/Card.vue'
import Container from '../views/Container'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/home',
    name: 'Container',
    component: Container,
    children: [
      {
        path: '/',
        redirect: 'card'
      },
      {
        path: 'card',
        name: 'Card',
        component: Card
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/List.vue')
      }
    ]
  },
  {
    name: '404',
    path: '*',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
