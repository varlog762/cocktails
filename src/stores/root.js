import { defineStore } from 'pinia'

import apiClient from '@/services/apiClient'

import { INGREDIENTS_URL, COCKTAILS_URL } from '../constants'

export const useRootStore = defineStore('root', {
  /**
   * The state of the application.
   * @property {Array} ingredients - the list of available ingredients
   * @property {String} ingredient - the currently selected ingredient
   * @property {Array} cocktails - the list of cocktails containing the currently selected ingredient
   * @property {Object} cocktail - the currently selected cocktail
   */
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: [],
    cocktail: null
  }),
  actions: {
    /**
     * Fetches the list of available ingredients from the API and stores it in the state.
     */
    async getIngredients() {
      this.ingredients = await apiClient.getData(INGREDIENTS_URL)
    },
    /**
     * Fetches the list of cocktails containing the given ingredient from the API and stores it in the state.
     *
     * @param {String} ingredientName - the name of the ingredient for which to fetch cocktails
     */
    async getCocktails(ingredientName) {
      this.cocktails = await apiClient.getData(`${COCKTAILS_URL}${ingredientName}`)
    },

    /**
     * Resets the currently selected ingredient and clears the list of cocktails.
     * Call this when the user navigates away from a cocktail or ingredient page.
     */
    clearChoice() {
      this.ingredient = null
      this.cocktails = []
    }
  }
})
