export const state = () => ({
  localCity: ''
})

export const mutations = {
  setLocalCity(state, city) {
    state.localCity = city
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
  }
}
