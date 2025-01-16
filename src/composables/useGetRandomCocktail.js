import { useRouter } from 'vue-router'

import { ROUTER_PATHS } from '@/constants'

/**
 * Composable that returns a function to navigate to the random cocktail page
 *
 * @returns {function} getRandomCocktail - Navigate to the random cocktail page
 */
export const useGetRandomCocktail = () => {
  const router = useRouter()
  const getRandomCocktail = () => {
    router.push(ROUTER_PATHS.RANDOM)
  }
  return getRandomCocktail
}
