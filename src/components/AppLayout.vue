<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
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

  &:hover {
    background-color: darken($accent, 10%);
  }

  &:active {
    color: $text-muted;
  }
}
</style>
