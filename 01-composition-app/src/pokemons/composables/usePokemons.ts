import { computed, watchEffect } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import { useQuery } from '@tanstack/vue-query'
import { initialPokemons } from '../data/initial-pokemons'

export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    retry: 1,
    initialData: initialPokemons
  })

  watchEffect(() => {
    // console.log('isError', isError.value)
  })

  return {
    pokemons,
    isLoading,
    isError,
    error,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
