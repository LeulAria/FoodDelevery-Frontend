import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'
import urlRoutes from './routes'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  ...urlRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Auth Guard
router.beforeEach((to, form, next) => {
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!store.getters["user/isLoggedIn"]) {
      next({
        name: 'Signin'
      });
    } else {
      next()
    }
    next()
  } else if (to.matched.some((record: any) => record.meta.requiresVisitor)) {
    if (store.getters["user/isLoggedIn"]) {
      next({
        name: 'Dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
