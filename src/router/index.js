import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Pages/Home'
import Projects from '@/components/Pages/Projects'
import About from '@/components/Pages/About'
import Contact from '@/components/Pages/Contact'
import Resume from '@/components/Pages/Resume'
import VuePlayground from '@/components/Projects/VuePlayground'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/vueplayground',
      name: 'VuePlayground',
      component: VuePlayground
    }
  ]
})
