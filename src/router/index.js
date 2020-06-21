import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import WhoAmI from '@/components/WhoAmI'
import Cv from '@/components/Cv'
import Skills from '@/components/Skills'
import Contacts from '@/components/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'WhoAmI',
      component: WhoAmI
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/cv',
      name: 'Cv',
      component: Cv
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contacts',
      name: 'Contatti',
      component: Contacts
    }
  ]
})
