<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <router-link :to="`/cocktails/${cocktail.idDrink}`">
      <div class="pic" :style="`background-image: url(${cocktail.strDrinkThumb})`"></div>
    </router-link>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.root {
  width: calc((100% - 78px) / 3);
  padding-right: 38px;
  margin-bottom: 20px;

  &:nth-child(3n + 3) {
    padding-right: 0;
  }
}

.pic {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
}

.name {
  margin-top: 15px;
  letter-spacing: 0.1em;
}
</style>
