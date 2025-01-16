<script setup>
/**
 * HomeView.vue
 *
 * This component serves as the main landing page of the Cocktails app.
 * Users can choose an ingredient from a dropdown menu to see a list of cocktails containing that ingredient.
 * The page dynamically updates to display relevant cocktails or encourages users to explore random recipes.
 */

import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import AppLayout from '@/components/AppLayout.vue'
import CocktailThumb from '@/components/CocktailThumb.vue'
import { useRootStore } from '@/stores/root'
import { useGetRandomCocktail } from '@/composables/useGetRandomCocktail'

// Initialize the root store
const rootStore = useRootStore()

// Pre-fetch the list of available ingredients from the API
rootStore.getIngredients()

// Extracting state and getters from the store
const { ingredients, ingredient, cocktails } = storeToRefs(rootStore)

// Fetches cocktails based on the selected ingredient
const getCocktails = () => rootStore.getCocktails(rootStore.ingredient)

// Clears the selected ingredient choice
const clearChoice = () => rootStore.clearChoice()

// Computed property to check if an ingredient is selected
const isIngredientChosen = computed(
  () => ingredient.value !== null && ingredient.value !== undefined
)

// Fetches a random cocktail using a custom composable
const getRandomCocktail = useGetRandomCocktail()
</script>

<template>
  <!-- Page layout component with background image and dynamic buttons -->
  <app-layout
    imgUrl="/bg-1.jpg"
    :backFunction="clearChoice"
    :isBackButtonVisible="isIngredientChosen"
    :randomCocktailFunction="getRandomCocktail"
  >
    <div class="wrapper">
      <!-- If no ingredient is selected, display the welcome message and dropdown -->
      <div v-if="!ingredient || !cocktails" class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>

        <!-- Dropdown to select an ingredient -->
        <div class="select-wrapper">
          <el-select
            @change="getCocktails"
            v-model="rootStore.ingredient"
            placeholder="Choose your drink"
            class="select"
            size="large"
            filterable
          >
            <!-- Dropdown options populated dynamically from the ingredients list -->
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            >
            </el-option>
          </el-select>
        </div>

        <!-- Introductory text about the app -->
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
          ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/homeview-cocktails.png" alt="Cocktails" class="img" />
      </div>

      <!-- If an ingredient is selected, display the list of relevant cocktails -->
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <!-- Display cocktail thumbnails -->
          <cocktail-thumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          ></cocktail-thumb>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.wrapper {
  display: flex;
  justify-content: center;
  align-items: start;
}

.info {
  padding: 80px;
  text-align: center;
}

.select-wrapper {
  margin-bottom: 50px;
}

.select {
  width: 220px;
}

.text {
  max-width: 516px;
  margin: 0 auto;
  color: $text-muted;
  font-weight: 400;
  font-size: 16px;
  line-height: 225%;
  letter-spacing: 0.1em;
  margin-bottom: 60px;
}

.cocktails {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-height: 65vh;
  overflow-y: auto;
  margin-top: 60px;
}
</style>
