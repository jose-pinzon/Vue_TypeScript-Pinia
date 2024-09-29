
<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import PaginationNumber from '../components/PaginationNumber.vue';
import useClients from '../composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue';


const { isLoading} =  useClients()

</script>

<template>
    <div> 
        <h1>Listado de clientes</h1>
        <!-- CLient List -->
        <ClientList/>

         <!-- Pagination Nuber -->
        <PaginationNumber></PaginationNumber>
          <!-- Loading Modal -->
        
        <LoadingModal v-if="isLoading "/>
    </div>
</template>

<style scoped>

</style>