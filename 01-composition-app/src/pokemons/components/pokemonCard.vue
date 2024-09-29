<template>
  <div class="card-pokemon" @click="goTo" @mouseenter="prefetch">
    <img :src="pokemon.frontSprite" alt="sin-imagen" />
    <span class="card-pokemon-name">{{ pokemon.name }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pokemon: Pokemon
}

import { useRouter } from 'vue-router'
import type { Pokemon } from '../interfaces'
import { useQueryClient } from '@tanstack/vue-query'
import { getPokemonId } from '../helpers/get-pokemons'

const props = defineProps<Props>()
const router = useRouter()
const queryClient = useQueryClient()

const goTo = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: props.pokemon.id }
  })
}

const prefetch = () => {
  const id = props.pokemon.id.toString()

  queryClient.prefetchQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonId(id)
  })
}
</script>

<style scoped>
.card-pokemon {
  width: 100px;
  min-height: 100px;
  background-color: rgb(199, 199, 199);
  margin: 2px;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
}

.card-pokemon-name {
  color: black;
}
</style>
