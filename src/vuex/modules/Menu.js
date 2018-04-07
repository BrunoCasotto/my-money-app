let state = {
  items: [
    {title: "Home", link: "/"},
    {title: "Caixa", link: "/#/caixa"},
    {title: "Estatisticas", link: "/#/estatisticas"}
  ]
}

let mutations = {}

let actions = {}

let getters = {
  getMenuItems() {
    return state.items
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}