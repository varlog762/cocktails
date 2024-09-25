<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { useGoBack } from '@/composables/useGoBack'

const goBack = useGoBack()
</script>

<template>
  <app-layout imgUrl="/src/assets/img/bg-1.jpg" :backFunction="goBack">
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

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
</style>
