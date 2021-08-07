import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    name: "Signin",
    component: Login
  },
  {
    path: '/signup',
    name: "Signup",
    component: Signup
  },
]