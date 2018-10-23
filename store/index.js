export const state = () => ({
  localCity: '',
  scenes: {},
  tabs: [],
  cheaps: {},
  cheapTabs: [],
  currentTab: '',
  currentCheapTab: ''
})

export const mutations = {
  setLocalCity(state, city) {
    state.localCity = city
  },
  setScenes(state, { tab, data, tabs }) {
    state.tabs = tabs
    if (!state.scenes[tab]) {
      state.scenes = {
        ...state.scenes,
        [tab]: data
      }
    }
  },
  setCurrentTab(state, tab) {
    state.currentTab = tab
  },
  setCheaps(state, { tab, data, tabs }) {
    state.cheapTabs = tabs
    if (!state.cheaps[tab]) {
      state.cheaps = {
        ...state.cheaps,
        [tab]: data
      }
    }
  },
  setCurrentCheapTab(state, tab) {
    state.currentCheapTab = tab
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.user.userInfo !== null
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const result = await this.$axios.post('/users/info')
    if (result.status === 0) {
      commit('user/setUserInfo', result.data)
    } else {
      commit('user/setUserInfo', null)
    }
  },
  async getScenes({ commit, state }, { tab, type }) {
    commit('setCurrentTab', tab)
    if (state.scenes[tab]) return
    const result = await this.$axios.get(`/styles?tab=${tab}&type=${type}`)
    if (result.status === 0) {
      commit('setScenes', {
        tab,
        data: result.data.styles,
        tabs: result.data.tabs
      })
    }
  },
  async getCheaps({ commit, state }, { tab, type }) {
    commit('setCurrentCheapTab', tab)
    if (state.cheaps[tab]) return
    const result = await this.$axios.get(`/styles?tab=${tab}&type=${type}`)
    if (result.status === 0) {
      commit('setCheaps', {
        tab,
        data: result.data.styles,
        tabs: result.data.tabs
      })
    }
  }
}
