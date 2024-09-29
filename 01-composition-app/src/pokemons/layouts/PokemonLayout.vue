<template>
  <div>
    <NavBar :router-list="routeLinks" is-secondary />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router'
import type { RouterLink } from '@/router/list-routes'

const routeLinks: RouterLink[] =
  pokemonRoute.children?.map((link) => {
    const { name, path, props } = link

    const { title, visible } = props as { title: string; visible: boolean }

    return {
      name: name?.toString() ?? '',
      path,
      title,
      visible
    }
  }) || []
</script>
