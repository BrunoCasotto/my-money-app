import Vue         from 'vue'
import App         from './components/App.vue'
import store       from '_vuex/store'
import Materialize from 'materialize-css/dist/css/materialize.css'
import VueRouter      from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: App, props: { activePage: 'home' } }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    store
}).$mount('#app')
