<script setup>
/**
 * RandomCocktailView.vue
 * This component displays details of a randomly selected cocktail.
 * It includes the cocktail's image, name, ingredients (with an interactive slider), and preparation instructions.
 * Users can request a new random cocktail or navigate back to the previous page.
 */

import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import AppLayout from '@/components/AppLayout.vue'
import { useGoBack } from '@/composables/useGoBack'
import apiClient from '@/services/apiClient'
import { RANDOM_COCKTAIL_URL, INGREDIENT_THUMBNAIL } from '../constants'

// Reactive state for the selected cocktail
const cocktail = ref(null)

/**
 * Fetches a random cocktail from the API.
 * The result is stored in the `cocktail` reactive variable.
 */
const getRandomCocktail = async () => {
  const [randomCocktail] = await apiClient.getData(RANDOM_COCKTAIL_URL)
  cocktail.value = randomCocktail
}

// Automatically fetch a random cocktail when the component is initialized
getRandomCocktail()

/**
 * Computed property to extract a list of ingredients for the cocktail.
 * Filters out null or empty ingredient values.
 */
const ingredients = computed(() => {
  return Object.entries(cocktail.value)
    .filter(([key, value]) => key.startsWith('strIngredient') && value)
    .map((ingredient) => ingredient[1])
})

// Utility for navigating back to the previous page
const goBack = useGoBack()
</script>

<template>
  <!-- Conditional rendering: ensure cocktail data is loaded before displaying the page -->
  <app-layout
    v-if="cocktail"
    :imgUrl="cocktail?.strDrinkThumb"
    :backFunction="goBack"
    :randomCocktailFunction="getRandomCocktail"
  >
    <div class="wrapper">
      <div class="info">
        <!-- Cocktail name -->
        <h2 class="title cocktail-name">{{ cocktail?.strDrink }}</h2>
        <div class="line"></div>

        <!-- Slider displaying cocktail ingredients -->
        <div class="slider">
          <swiper :slides-per-view="3" :space-between="50" class="swiper">
            <!-- Each slide represents an ingredient -->
            <swiper-slide v-for="ingredient in ingredients" :key="ingredient">
              <div class="ingredient-item">
                <img
                  class="ingredient-pic"
                  :src="`${INGREDIENT_THUMBNAIL}${ingredient}-small.png`"
                  :alt="`${ingredient} picture`"
                />
                <!-- Ingredient name -->
                <div class="ingredient-name">{{ ingredient }}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- Cocktail preparation instructions -->
        <div class="instructions">{{ cocktail?.strInstructions }}</div>
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
  padding: 180px 80px 0;
  text-align: center;
}

.slider {
  padding: 50px 0;
}

.swiper {
  width: 586px;
}

.ingredient-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.ingredient-name {
  text-align: center;
}

.ingredient-pic {
  width: 100px;
  height: 100px;
}

.instructions {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-align: center;
  color: $text-muted;
}
</style>
