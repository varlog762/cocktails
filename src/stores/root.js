import { defineStore } from 'pinia'

import apiClient from '@/services/apiClient'

import { INGREDIENTS_URL, COCKTAILS_URL } from '../constants'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: [],
    cocktail: null
  }),
  actions: {
    async getIngredients() {
      this.ingredients = await apiClient.getData(INGREDIENTS_URL)
    },
    async getCocktails(ingredientName) {
      this.cocktails = await apiClient.getData(`${COCKTAILS_URL}${ingredientName}`)
    },

    clearChoice() {
      this.ingredient = null
      this.cocktails = []
    }
  }
})
