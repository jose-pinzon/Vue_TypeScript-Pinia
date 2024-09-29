import clientsApi from "@/api/clients-api";
import type { Client, getClient } from "../interfaces/clients";
import { useQuery } from "@tanstack/vue-query";
import { useClientStore } from "@/store/clients";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";

const getClients = async( page: number ):Promise<Client[]> => {
    const { data } = await clientsApi.get<getClient>(`/clients?_page=${ page }`)

    return data.data;
}

const useClients = () => {

    const store = useClientStore();
    const { clients, currentPage, totalPages} = storeToRefs( store )


    const { isLoading, data } = useQuery({
        queryKey: ['clients?page=', currentPage ],
        queryFn: () => getClients( currentPage.value )
    })

    watch( data, clients => {
        if ( clients ) 
            store.setClients( clients );
    })



    return{
        
        //properties
        clients,
        currentPage,
        isLoading,
        totalPages,


        //methods
        getPage: ( page:number ) => {
            store.currentPage = page
        },


        //getter

        // se creara algo como esto [,,,,]
        totalPageNumbers: computed(
            () => [...new Array(totalPages.value)].map(( value , index )=> index + 1 )
        )
    }
}


export default useClients;