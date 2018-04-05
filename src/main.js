import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './components/App.vue'

Vue.use(VueMaterial)
import store from '_vuex/store'

new Vue({
    store,
    ...App
}).$mount('#app')
