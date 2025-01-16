<script setup>
/**
 * CocktailThumb.vue
 * This component displays a clickable thumbnail for a cocktail, including:
 * - An image as the thumbnail background, derived from the cocktail's data.
 * - The cocktail's name.
 * - A link to the cocktail's detail page.
 */

// Defining the props for the component
const { cocktail } = defineProps({
  // The `cocktail` object contains details about the cocktail.
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <!-- Root container for the cocktail thumbnail -->
  <div class="root">
    <!-- Router link to navigate to the cocktail's detail page -->
    <router-link :to="`/cocktails/${cocktail.idDrink}`">
      <!-- Thumbnail image background -->
      <div class="pic" :style="`background-image: url(${cocktail.strDrinkThumb})`"></div>
      <!-- Cocktail name displayed below the thumbnail -->
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
