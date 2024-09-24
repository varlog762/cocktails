import { defineStore } from 'pinia'
import axios from 'axios'

import {
  INGREDIENTS_URL,
  COCKTAILS_URL,
  COCKTAIL_BY_ID_URL,
  RANDOM_COCKTAIL_URL
} from '../constants'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: [],
    cocktail: null,
    cocktailIngredientsWithMeasures: []
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks
    },
    async getCocktails(ingredientName) {
      const data = await axios.get(`${COCKTAILS_URL}${ingredientName}`)
      this.cocktails = data?.data?.drinks
    },
    async getCocktailById(cocktailId) {
      const data = await axios.get(`${COCKTAIL_BY_ID_URL}${cocktailId}`)
      this.cocktail = data?.data?.drinks.at(0)
    },
    async getRandomCocktail() {
      const data = await axios.get(RANDOM_COCKTAIL_URL)
      this.cocktail = data?.data?.drinks.at(0)
    },

    setIngredient(ingredient) {
      if (!ingredient) return

      this.ingredient = ingredient
    }
  }
})
