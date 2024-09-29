import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Client } from '../clients/interfaces/clients';



export const useClientStore = defineStore('client', () => {

    const currentPage = ref<number>(1)
    const totalPages = ref<number>(5)
    const clients = ref<Client[]>([])

const count = ref<number>(0);

     return {
          //State Properties
            currentPage,
            totalPages,
            clients,

          //Getters
          

           //Actions
           setClients( newClient:Client[]){
                clients.value = newClient
           },

           setPage(page:number){
            if( currentPage.value === page ) return;
            currentPage.value === page
           }
    }
})  