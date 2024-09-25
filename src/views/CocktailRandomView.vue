<script setup>
import { ref } from 'vue'

import AppLayout from '@/components/AppLayout.vue'
import { useGoBack } from '@/composables/useGoBack'
import apiClient from '@/services/apiClient'
import { RANDOM_COCKTAIL_URL } from '../constants'

const cocktail = ref(null)

const getRandomCocktail = async () => {
  const [randomCocktail] = await apiClient.getData(RANDOM_COCKTAIL_URL)
  cocktail.value = randomCocktail
}
getRandomCocktail()

const goBack = useGoBack()
</script>

<template>
  <app-layout
    imgUrl="/src/assets/img/bg-1.jpg"
    :backFunction="goBack"
    :randomCocktailFunction="getRandomCocktail"
  >
    <div v-if="cocktail" class="wrapper">
      <div class="info">
        <h2 class="title cocktail-name">{{ cocktail.strDrink }}</h2>
        <div class="line"></div>
        <ul class="ingredient-list">
          <!-- <li class="ingredient" v-for="ingredient in ingredients" :key="ingredient">
            <img src="/src/assets/icons/heart.svg" alt="heart picture" />
            <div class="ingredient-name">{{ ingredient }}</div>
          </li> -->
        </ul>
        <div class="instructions">{{ cocktail.strInstructions }}</div>
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

.ingredient-list {
  li:last-child {
    margin-bottom: 80px;
  }
}

.ingredient {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.1em;
  color: $text;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  gap: 20px;
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
