import { useRouter } from 'vue-router'

import { ROUTER_PATHS } from '@/constants'

export const useGetRandomCocktail = () => {
  const router = useRouter()
  const getRandomCocktail = () => {
    router.push(ROUTER_PATHS.RANDOM)
  }
  return getRandomCocktail
}
