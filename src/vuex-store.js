// Typing setting up Vuex by command line is yarn add vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexStore = new Vuex.Store({
  state: {
    numbers: [1, 2, 3]
  },

  mutations: {
    ADD_NUMBER (state, payload) {
      state.numbers.push(payload)
    }
  },

  actions: {
    addNumber (context, number) {
      context.commit('ADD_NUMBER', number)
    }
  },

  getters: {
    getNumbers (state) {
      return state.numbers
    }
  }
})

export default vuexStore
