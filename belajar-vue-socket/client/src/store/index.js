import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    SOCKET_init (state, payload) {
      console.log(payload[0].name)
      state.messages = payload
    },
    SOCKET_serverMessage (state, payload) {
      state.messages.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
