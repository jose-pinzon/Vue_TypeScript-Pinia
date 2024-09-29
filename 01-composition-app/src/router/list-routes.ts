export interface RouterLink {
  name: string
  path: string
  title: string
  visible: boolean
}

export const routerLinks: RouterLink[] = [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    visible: true
  },
  {
    path: '/about',
    name: 'About',
    title: 'about',
    visible: true
  },
  {
    path: '/counter',
    name: 'Counter',
    title: 'counter',
    visible: true
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    title: 'Pokemons',
    visible: true
  }
]
