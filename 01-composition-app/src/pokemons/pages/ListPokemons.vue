<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons'
import cardList from '../components/CardList.vue'

// import { usePokemons } from '../composables/usePokemons'
const { count, isLoading, pokemons, error, isError } = usePokemons()

// getPokemons().then((data) => (pokemons.value = data)) Si lo usamos de esta manera no es necesario colocar el suspense
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <div v-else-if="isError">
    {{ error }}
  </div>

  <div v-else>
    <h1>Cantidad de pokemons - {{ count }}</h1>
    <cardList :pokemons="pokemons ?? []" />
  </div>
</template>
