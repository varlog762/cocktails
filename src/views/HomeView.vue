<script setup>
import { storeToRefs } from 'pinia'

import AppLayout from '@/components/AppLayout.vue'
import CocktailThumb from '@/components/CocktailThumb.vue'
import { useRootStore } from '@/stores/root'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore)

const getCocktails = () => rootStore.getCocktails(rootStore.ingredient)
</script>

<template>
  <app-layout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div v-if="!ingredients || !cocktails.length" class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            @change="getCocktails"
            v-model="rootStore.ingredient"
            placeholder="Choose your drink"
            class="select"
            size="large"
            filterable
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            >
            </el-option>
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
          ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/homeview-cocktails.png" alt="Cocktails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
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
