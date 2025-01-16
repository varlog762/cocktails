import { useRouter } from 'vue-router'

/**
 * Returns a function that navigates to the previous route.
 *
 * @returns {() => void} - A function that navigates to the previous route.
 */
export const useGoBack = () => {
  const router = useRouter()
  const goBack = () => router.go(-1)
  return goBack
}
