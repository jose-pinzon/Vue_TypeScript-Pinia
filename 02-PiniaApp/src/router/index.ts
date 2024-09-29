
import ClientLayout from '@/clients/layout/ClientLayout.vue'
import ClientPage from '@/clients/pages/ClientPage.vue'
import ListPage from '@/clients/pages/ListPage.vue'
import Counter1Page from '@/counter/pages/Counter1Page.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1Page
    },
    {
      path: '/counterSetup',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {
      path:'/clients',
      name:'Clients',
      component: ClientLayout,
      redirect: { name:'List'},
      children:[
        { 
          path:'/clients/list', 
          name:'List',
          component:ListPage
        },
        { 
          path:'/clients/:id', 
          name:'client-id',
          component:ClientPage
        }
      ]
    }
  ]
})

export default router
