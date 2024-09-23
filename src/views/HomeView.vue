<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import AppLayout from '@/components/AppLayout.vue'
import CocktailThumb from '@/components/CocktailThumb.vue'
import { useRootStore } from '@/stores/root'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, cocktails } = storeToRefs(rootStore)
const ingredient = ref(null)

const getCocktails = () => rootStore.getCocktails(ingredient.value)
</script>

<template>
  <app-layout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div v-if="!ingredients || !cocktails.length" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            @change="getCocktails"
            v-model="ingredient"
            placeholder="Choose your drink"
            class="select"
            size="large"
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

h1 {
  background-color: $background;
  padding: 0;
  margin: 0;
}

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
  margin: 50px 0;
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 60px;
}
</style>
