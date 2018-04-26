let state = {
  items: [
    // {title: "Estatisticas", link: "/#/estatisticas"}
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