import Vue         from 'vue'
import App         from './components/App.vue'
import store       from '_vuex/store'
import Materialize from 'materialize-css/dist/css/materialize.css'

new Vue({
    store,
    ...App
}).$mount('#app')
