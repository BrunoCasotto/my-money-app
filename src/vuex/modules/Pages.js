
  let listOfPages = [
    'home',
    'caixa',
    'metricas',
    'configuracoes'
  ]

  let state = {
    listOfPages,
    activePage: listOfPages[0]
  }


  let mutations = {
    setPage (state, data) {
      state.activePage = data
    }
  }

  let actions = {
    setPage (context) {
      context.commit('setPage')
    }
  }

  let getters = {
    getActivePage() {
      return state.activePage
    }
  }

  export default {
    state,
    mutations,
    actions,
    getters
  }