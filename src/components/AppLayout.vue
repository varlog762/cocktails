<script setup>
/**
 * AppLayout.vue
 * This component provides a layout for the application, including:
 * - A background image specified via the `imgUrl` prop.
 * - A back button, controlled by the `isBackButtonVisible` prop, with a click handler passed as the `cb` prop.
 * - A "Get random cocktail" button, triggered by the `randomCocktailFunction` prop.
 * - A slot for child components to render their content within the layout.
 */

import { Back } from '@element-plus/icons-vue'

// Defining props for the component
defineProps({
  imgUrl: {
    // URL for the background image
    type: String,
    required: true
  },
  // Callback function triggered by the back button
  cb: {
    type: Function,
    required: true
  },
  // Function to fetch a random cocktail, triggered by the "Get random cocktail" button
  randomCocktailFunction: {
    type: Function,
    required: true
  },
  // Boolean to control the visibility of the back button (default is true)
  isBackButtonVisible: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <!-- Root container -->
  <div class="root">
    <!-- Background image container -->
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <!-- Main content container -->
    <div class="main">
      <!-- Back button: visible if `isBackButtonVisible` is true -->
      <el-button
        v-if="isBackButtonVisible"
        @click="cb"
        class="btn-back"
        :icon="Back"
        size="large"
        circle
      />

      <!-- Button to fetch a random cocktail -->
      <el-button @click="randomCocktailFunction" class="btn">Get random cocktail</el-button>
      <!-- Slot for rendering child content within the layout -->
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.root {
  min-height: 100vh;
  display: flex;
  background-color: $background;
}

.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.main {
  position: relative;
  width: 50%;
  padding: 32px 40px;
}

.btn {
  position: absolute;
  top: 32px;
  right: 40px;
  background-color: $accent;
  border-color: $accent;
  font-size: 16px;
  font-family: 'Raleway', 'Arial', sans-serif;
  color: $text;

  n &:hover {
    background-color: darken($accent, 10%);
  }

  &:active {
    color: $text-muted;
  }
}

.btn-back {
  position: absolute;
  top: 32px;
  left: 40px;
  color: $text;
  border: 1px solid $text;
  background-color: $background;

  &:hover {
    border-color: $accent;
    color: $accent;
  }
}
</style>
