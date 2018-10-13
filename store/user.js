export const state = () => ({
  userInfo: null
})

export const mutations = {
  setUserInfo(state, user) {
    state.userInfo = user
  }
}

export const getters = {
  user(state) {
    return state.userInfo
  }
}
