export const state = () => ({
  userInfo: null
})

export const mutations = {
  setUserInfo(state, user) {
    state.userInfo = user
  },
  resetUserInfo(state) {
    state.userInfo = null
  }
}

export const actions = {
  async logout({ commit }) {
    const result = await this.$axios.post('/users/logout')
    if (result.status === 0) {
      commit('resetUserInfo')
    }
  }
}

export const getters = {
  user(state) {
    return state.userInfo
  }
}
