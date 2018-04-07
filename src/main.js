import Vue         from 'vue'
import App         from '_components/App.vue'
import store       from '_vuex/store'
import Materialize from 'materialize-css/dist/css/materialize.css'
import VueRouter   from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: App, props: { activePage: 'home' } },
    { path: '/caixa', component: App, props: { activePage: 'caixa' } },
    { path: '/estatisticas', component: App, props: { activePage: 'estatisticas' } }
]

const router = new VueRouter({
    history: true,
    routes
})

new Vue({
    router,
    store
}).$mount('#app')
