import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemons'

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/list`,
  // De esta forma se carga de manera perezoza
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/by/:id`,
      props: { title: 'Pokemon por ID', visible: false },
      name: 'pokemon-id',
      component: () => import('@/pokemons/pages/PokemonById.vue')
    },
    {
      path: `/${ROUTE_NAME}/list`,
      name: 'pokemon-list',
      props: { title: 'Listado', visible: true },
      component: () => import('@/pokemons/pages/ListPokemons.vue')
    },
    {
      path: `/${ROUTE_NAME}/list-native`,
      name: 'pokemon-list-native',
      props: { title: 'Listado Nativo', visible: true },
      component: () => import('@/pokemons/pages/ListPokemonsNative.vue')
    },
    {
      path: `/${ROUTE_NAME}/search`,
      name: 'pokemon-search',
      props: { title: 'Busqueda', visible: true },
      component: () => import('@/pokemons/pages/PokemonSearch.vue')
    }
  ]
}
