import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/Teams.vue')
    },
    {
      path: '/rates',
      name: 'rates',
      component: () => import('../views/RatesView.vue')
    },
    
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('../views/TestimonialsView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  console.log({to,from})
  return true
})



export default router
