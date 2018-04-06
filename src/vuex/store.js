import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/**
 * Modules of states
 */
import Pages from './modules/Pages'
import Menu from './modules/Menu'

const store = new Vuex.Store({
  modules: {
    Pages,
    Menu
  }
})

export default store