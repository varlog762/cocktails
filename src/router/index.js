import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CocktailView from '@/views/CocktailView.vue'
import CocktailRandomView from '@/views/CocktailRandomView.vue'
import { ROUTER_PATHS } from '@/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATHS.HOME,
      name: ROUTER_PATHS.HOME,
      component: HomeView
    },
    {
      path: ROUTER_PATHS.COCKTAIL,
      name: ROUTER_PATHS.COCKTAIL,
      component: CocktailView
    },
    {
      path: ROUTER_PATHS.RANDOM,
      name: ROUTER_PATHS.RANDOM,
      component: CocktailRandomView
    }
  ]
})

export default router
