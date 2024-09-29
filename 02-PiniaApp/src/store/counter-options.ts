import { defineStore } from "pinia"


interface CounterOptionsState {
    count:number;
    lastChange?: Date | undefined ;
}
export const useCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({ 
            count: 0, 
            lastChaged: undefined
    } as CounterOptionsState ),

    getters: {
        squaredCount: ( state ) => state.count * state.count,
        doubleCount: (state) => state.count * 2,
    },
    actions: {
      incrementBy( value: number ) {
        this.count += value
        this.lastChange = new Date()
      },

      increment(){
        this.incrementBy(1)
      }

      
    },
  })