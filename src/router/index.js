import Vue from 'vue'
import Router from 'vue-router'
import ProfileManagement from '@/components/ProfileManagement'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
