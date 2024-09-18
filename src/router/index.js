import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CocktailView from '@/views/CocktailView.vue'
import CocktailRandomView from '@/views/CocktailRandomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cocktails/:id',
      name: 'cocktail',
      component: CocktailView
    },
    {
      path: '/random',
      name: 'random',
      component: CocktailRandomView
    }
  ]
})

export default router
