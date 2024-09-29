<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import store from '@/store/store'
import CardList from '../components/CardList.vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

const { pokemons } = store
useQuery({
  queryKey: ['pokemons'],
  queryFn: () => getPokemons(),
  select: (data: Pokemon[]) => {
    store.loadedPokemons(data)
  }
})
</script>

<template>
  <h1>listado Nativo</h1>
  <h1 v-if="pokemons.isLoading">Loading...</h1>
  <div v-else-if="pokemons.hasError">
    {{ pokemons.errorMessage }}
  </div>

  <div v-else>
    <h1>Cantidad de pokemons - {{ pokemons.count }}</h1>
    <CardList :pokemons="pokemons.list" />
  </div>
</template>
