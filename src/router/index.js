import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Inspiration from '@/pages/Inspiration'
import Tutorials from '@/pages/Tutorials'
import Wordpress from '@/pages/Wordpress'
import Blog from '@/pages/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Inspiration',
      name: 'Inspiration',
      component: Inspiration
    },
    {
      path: '/Tutorials',
      name: 'Tutorials',
      component: Tutorials
    },
    {
      path: '/Wordpress',
      name: 'Wordpress',
      component: Wordpress
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
