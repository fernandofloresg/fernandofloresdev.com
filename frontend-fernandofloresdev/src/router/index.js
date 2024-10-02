import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/Blog.vue')
    },
  ]
})

export default router
