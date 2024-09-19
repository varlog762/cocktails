<script setup>
import AppLayout from '@/components/AppLayout.vue'
</script>

<template>
  <app-layout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
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
</style>
