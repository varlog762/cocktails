import { useRouter } from 'vue-router'

export const useGetRandomCocktail = () => {
  const router = useRouter()
  const getRandomCocktail = () => {
    router.push('/random')
  }
  return getRandomCocktail
}
