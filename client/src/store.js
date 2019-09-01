import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    setEvents: (state, events) => {
      state.events = events
    }
  },
  getters: {
    getEvents: state => {
      return state.events
    }
  },
  actions: {
    setEvents: context => {
      axios({ method: 'GET', url: 'http://localhost:3000/tasks' }).then(
        result => {
          context.commit('setEvents', result.data)
        }
      )
    }
  }
})
