import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
