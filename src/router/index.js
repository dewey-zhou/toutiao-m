import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: () => import('../views/layout/'),
    children: [
      {
        path: '/',
        component: () => import('../views/home/')
      },
      {
        path: '/qa',
        component: () => import('../views/qa/')
      },
      {
        path: '/video',
        component: () => import('../views/video/')
      },
      {
        path: '/my',
        component: () => import('../views/my/')
      }

    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
