export const state = () => ({})

export const mutations = {}

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
