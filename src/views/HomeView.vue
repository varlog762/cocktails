<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import AppLayout from '@/components/AppLayout.vue'
import { useRootStore } from '@/stores/root'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients } = storeToRefs(rootStore)
const ingredient = ref(null)
</script>

<template>
  <app-layout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
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
  margin-top: 50px;
}

.select {
  width: 220px;
}
</style>
