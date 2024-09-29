import { getPokemonId } from '../helpers/get-pokemons'
import { useQuery } from '@tanstack/vue-query'

export const usePokemon = (id: string) => {
  const {
    isLoading,
    data: pokemon,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonId(id)
  })

  return {
    pokemon,
    isLoading,
    isError,
    errorMessage: error
  }
}
