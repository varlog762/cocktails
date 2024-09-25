<script setup>
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import AppLayout from '@/components/AppLayout.vue'
import { useGoBack } from '@/composables/useGoBack'
import apiClient from '@/services/apiClient'
import { RANDOM_COCKTAIL_URL, INGREDIENT_THUMBNAIL } from '../constants'

const cocktail = ref(null)

const getRandomCocktail = async () => {
  const [randomCocktail] = await apiClient.getData(RANDOM_COCKTAIL_URL)
  cocktail.value = randomCocktail
}
getRandomCocktail()

const ingredients = computed(() => {
  return Object.entries(cocktail.value)
    .filter(([key, value]) => key.startsWith('strIngredient') && value)
    .map((ingredient) => ingredient[1])
})

const goBack = useGoBack()
</script>

<template>
  <app-layout
    v-if="cocktail"
    :imgUrl="cocktail?.strDrinkThumb"
    :backFunction="goBack"
    :randomCocktailFunction="getRandomCocktail"
  >
    <div class="wrapper">
      <div class="info">
        <h2 class="title cocktail-name">{{ cocktail?.strDrink }}</h2>
        <div class="line"></div>
        <div class="slider">
          <swiper :slides-per-view="3" :space-between="50" class="swiper">
            <swiper-slide v-for="ingredient in ingredients" :key="ingredient">
              <div class="ingredient-item">
                <img
                  class="ingredient-pic"
                  :src="`${INGREDIENT_THUMBNAIL}${ingredient}-small.png`"
                  :alt="`${ingredient} picture`"
                />
                <div class="ingredient-name">{{ ingredient }}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
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
