<script setup lang="ts">
import useClients from '../composables/useClients';


const { getPage, totalPageNumbers, totalPages ,currentPage } = useClients()
</script>

<template>
    <div>
        <button 
            :disabled="currentPage == 1"
            @click="getPage( currentPage - 1)"
        >
            Anterior
         </button>

        <button v-for="number of totalPageNumbers" 
        :key="number"
        :class="{ active: currentPage === number }"
        @click="getPage(number)">
            {{ number }}
        </button>
        
        <button 
            :disabled="currentPage === totalPages"
            @click="getPage(currentPage + 1 )">
            Siguiente
        </button>
    </div>
</template>


<style scoped>
    button{
        padding: 4px 8px;
        margin-top: 5px;
        margin-right: 4px;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 3px;
        color: #ccc;
        transition: all 3ms ease-in-out;
    }

    button:hover{
        background-color: #ccc;
        color: black;
    }

    button:disabled{
        cursor: not-allowed;
        opacity: 0.5 ;
    }

    .active{
        background-color: #ccc;
        color: black;
    }
</style>