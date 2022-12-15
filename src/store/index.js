import { createStore } from 'vuex'
import EventServices from '@/services/EventServices.js'

export default createStore({
  state: {
    user: 'John Doe',
    events: []
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventServices.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {}
})
