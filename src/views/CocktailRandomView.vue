<script setup>
import AppLayout from '@/components/AppLayout.vue'
import { useGoBack } from '@/composables/useGoBack'

const goBack = useGoBack()
</script>

<template>
  <app-layout imgUrl="/src/assets/img/bg-1.jpg" :backFunction="goBack"></app-layout>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
</style>
