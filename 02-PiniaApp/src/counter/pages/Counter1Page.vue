<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionValue from '../components/CounterOptionsValue.vue'
import { storeToRefs } from 'pinia';

const store = useCounterOptionsStore();

const { count, squaredCount} = storeToRefs( store ) //desestructurar las variables del estado
const { increment, incrementBy, $reset} = store //las funciones se pueden desestructurar como siempre
</script>
<template>
    <h1>Pinia Options</h1>

    <h4>counter: {{ count }}</h4>
    <h4>Square: {{ squaredCount }}</h4>

    <br>

    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>

    <button @click="store.$reset()">Reset</button>

  
  <CounterOptionValue/>
</template>


<style  scoped>
    button {
        margin-left: 5px;
    }
</style>