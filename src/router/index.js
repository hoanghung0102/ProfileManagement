import Vue from 'vue'
import Router from 'vue-router'
import ProfileManagement from '@/components/ProfileManagement'
import Profile from '@/components/Profile'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'ProfileManagement',
      component: ProfileManagement
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile,
      props: true
    }
  ]
})
