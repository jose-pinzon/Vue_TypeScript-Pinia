<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';
import { storeToRefs } from 'pinia';
import CounterSetupValue from '../components/CounterSetupValue.vue';

const store = useCounterSetupStore();

const { count, squaredCount} = storeToRefs( store ) //desestructurar las variables del estado
const {incrementBy} = store //las funciones se pueden desestructurar como siempre
</script>
<template>
    <h1>Pinia Setup</h1>

    <h4>counter: {{ count }}</h4>
    <h4>Square: {{ squaredCount }}</h4>

    <br>

    <button @click="incrementBy()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>

    <button @click="store.$reset()">Reset</button>

  
  <CounterSetupValue/>
</template>


<style  scoped>
    button {
        margin-left: 5px;
    }
</style>