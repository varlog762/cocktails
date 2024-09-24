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
      <div class="name">{{ cocktail.strDrink }}</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.root {
  width: calc((100% - 78px) / 3);
  margin-right: 38px;
  margin-bottom: 30px;

  &:nth-child(3n + 3) {
    margin-right: 0;
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
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 15px;
  letter-spacing: 0.1em;
}
</style>
