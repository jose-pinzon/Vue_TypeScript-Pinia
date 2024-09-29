<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './shared/components/NavBar.vue'
import { routerLinks } from './router/list-routes'
</script>

<template>
  <header>
    <NavBar :router-list="routerLinks" />
  </header>
  <!-- <Suspense> -->
  <RouterView />
  <!-- <template #fallback> Loading... </template>
  </Suspense> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
