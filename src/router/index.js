import Vue from 'vue'
import Router from 'vue-router'
import ProfileManagement from '@/components/ProfileManagement'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import OngNoi from '@/components/InheriAttributes/OngNoi'
import DisplayNumberSubmit from '@/components/StateManagement/UsingPros/DisplayNumberSubmit'
import DisplayNumberEventBus from '@/components/StateManagement/UsingEventBus/DisplayNumberEventBus'
import DisplayNumberSimpleStore from '@/components/StateManagement/SimpleGlobalStore/DisplayNumberSimpleStore'
import DisplayNumberVuexStore from '@/components/StateManagement/Vuex/DisplayNumberVuexStore'

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
    },
    {
      path: '/ongnoi',
      name: 'OngNoi',
      component: OngNoi,
      props: true
    },
    {
      path: '/display-number-using-pros',
      name: 'DisplayNumberSubmit',
      component: DisplayNumberSubmit,
      props: true
    },
    {
      path: '/display-number-using-event-bus',
      name: 'DisplayNumberEventBus',
      component: DisplayNumberEventBus,
      props: true
    },
    {
      path: '/display-number-using-simple-store',
      name: 'DisplayNumberSimpleStore',
      component: DisplayNumberSimpleStore,
      props: true
    },
    {
      path: '/display-number-vuex-store',
      name: 'DisplayNumberVuexStore',
      component: DisplayNumberVuexStore,
      props: true
    }
  ]
})
