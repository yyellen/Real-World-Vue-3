import { createStore } from 'vuex'
import EventServices from '@/services/EventServices.js'

export default createStore({
  state: {
    user: 'John Doe',
    events: [],
    event: {}
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
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
    },
    fetchEvents({ commit }) {
      EventServices.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        EventServices.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  },
  modules: {}
})
