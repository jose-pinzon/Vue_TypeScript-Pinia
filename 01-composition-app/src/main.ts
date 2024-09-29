import './assets/main.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/store/store'

const app = createApp(App)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 120, //2 minutes
        refetchOnReconnect: 'always' //cuando el cliente se reconecte ya tenga todos los datos cargados
      }
    }
  }
})

app.use(router)
app.mount('#app')
