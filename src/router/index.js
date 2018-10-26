import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Pages/Home'
import Projects from '@/components/Pages/Projects'
import About from '@/components/Pages/About'
import Contact from '@/components/Pages/Contact'
import Resume from '@/components/Pages/Resume'
import VuePlayground from '@/components/Projects/VuePlayground'
import InMoment from '@/components/Projects/InMoment'
import TalkBlok from '@/components/Projects/TalkBlok'
import React from '@/components/Projects/React'
import ColorRun from '@/components/Projects/ColorRun'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
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
    },
    {
      path: '/inmoment',
      name: 'InMoment',
      component: InMoment
    },
    {
      path: '/talkblok',
      name: 'TalkBlok',
      component: TalkBlok
    },
    {
      path: '/react',
      name: 'React',
      component: React
    },
    {
      path: '/colorrun',
      name: 'ColorRun',
      component: ColorRun
    }
  ]
})
