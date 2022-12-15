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
      return EventServices.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
          commit('SET_EVENT', event)
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvents({ commit }) {
      return EventServices.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } else {
        return EventServices.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    }
  },
  modules: {}
})
