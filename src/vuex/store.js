import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/**
 * Modules of states
 */
import Pages from './modules/Pages'

const store = new Vuex.Store({
  modules: {
    Pages
  }
})

export default store