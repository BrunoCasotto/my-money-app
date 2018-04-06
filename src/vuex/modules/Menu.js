let state = {
  status: false
}

let mutations = {
  toggleMenu (state, data) {
    state.status = !state.status
  }
}

let actions = {
  toggleMenu (context) {
    context.commit('toggleMenu')
  }
}

let getters = {
  getMenuStatus() {
    return state.status
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}