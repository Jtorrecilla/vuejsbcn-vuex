
import Vue from 'vue'
import Vuex from 'vuex'
import car from './car'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    car,
  },
  strict: debug
})