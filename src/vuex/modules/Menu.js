let state = {
  items: [
    "Home",
    "Caixa",
    "Estatisticas"
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