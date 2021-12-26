import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'buzz',
  },
  {
    path: '/buzz',
    name: 'buzz',
    component: () => import('@/views/buzz/buzz.vue'),
  },
  {
    path: '/buzzCreate',
    name: 'buzzCreate',
    component: () => import('@/views/buzz/buzzCreate.vue'),
  },
  {
    path: '/nearby',
    name: 'nearby',
    component: () => import('@/views/nearby/nearby.vue'),
  },
  {
    path: '/businessCreate',
    name: 'businessCreate',
    component: () => import('@/views/nearby/businessCreate.vue'),
  },
  {
    path: '/scan',
    name: 'scan',
    component: () => import('@/views/scan/scan.vue'),
  },
  {
    path: '/reward',
    name: 'reward',
    component: () => import('@/views/rewards/reward.vue'),
  },
  {
    path: '/rewardCreate',
    name: 'rewardCreate',
    component: () => import('@/views/rewards/rewardCreate.vue'),
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('@/views/more/more.vue'),
  },
  {
    path: '/svg-test',
    name: 'svg-test',
    component: () => import('@/views/svg/svg-test.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
