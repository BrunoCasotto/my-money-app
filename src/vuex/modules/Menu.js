let state = {
  status: true
}

let mutations = {
  togglemenu (state, data) {
    state.status = !state.status
  }
}

let actions = {
  togglemenu (context) {
    context.commit('togglemenu')
  }
}

let getters = {
  getMenuStatus() {
    return state.activePage
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}