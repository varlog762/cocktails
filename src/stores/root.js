import { defineStore } from 'pinia'
import axios from 'axios'

import { INGREDIENTS_URL, COCKTAILS_URL } from '../constants'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    cocktails: []
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks
    },
    async getCocktails(ingredientName) {
      const data = await axios.get(`${COCKTAILS_URL}${ingredientName}`)
      this.cocktails = data?.data?.drinks
    }
  }
})
