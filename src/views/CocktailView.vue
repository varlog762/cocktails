<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/components/AppLayout.vue'
import apiClient from '@/services/apiClient'
import { useGoBack } from '@/composables/useGoBack'
import { useGetRandomCocktail } from '@/composables/useGetRandomCocktail'
import { COCKTAIL_BY_ID_URL, C } from '../constants'

const cocktail = ref(null)
const route = useRoute()
const id = route.params.id

const getCocktail = async () => {
  const [response] = await apiClient.getData(`${COCKTAIL_BY_ID_URL}${id}`)
  cocktail.value = response
}
getCocktail()

const ingredients = computed(() => {
  return Object.entries(cocktail.value)
    .filter(([key, value]) => key.startsWith('strIngredient') && value)
    .map(
      (ingredient, idx) =>
        `${ingredient[1]} | ${cocktail.value[`strMeasure${idx + 1}`] ?? C.DEFAULT_MEASURE}`
    )
})

const goBack = useGoBack()
const getRandomCocktail = useGetRandomCocktail()
</script>

<template>
  <template v-if="cocktail">
    <app-layout
      :imgUrl="cocktail.strDrinkThumb"
      :backFunction="goBack"
      :randomCocktailFunction="getRandomCocktail"
    >
      <div class="wrapper">
        <div class="info">
          <h2 class="title cocktail-name">{{ cocktail.strDrink }}</h2>
          <div class="line"></div>
          <ul class="ingredient-list">
            <li class="ingredient" v-for="ingredient in ingredients" :key="ingredient">
              <img src="/src/assets/icons/heart.svg" alt="heart picture" />
              <div class="ingredient-name">{{ ingredient }}</div>
            </li>
          </ul>
          <div class="instructions">{{ cocktail.strInstructions }}</div>
        </div>
      </div>
    </app-layout>
  </template>
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
