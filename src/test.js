import Vue from 'vue'
import Vuex from 'vuex'

const store = new Vuex.store({
    state: {
        count: 0,
    },
    mutatiions: {
        increment(state){
            state.count++
        }
    }
})

console.log(store.state.count)

store.commit('increment')

console.log(store.state.count)
