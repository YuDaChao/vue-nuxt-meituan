<template>
  <div class="header-wrap">
    <header-bar
      :user-info="userInfo"
      :local-city="localCity"
      @handleLogout="handleLogout"
    />
    <header-search/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HeaderBar from './HeaderBar'
import HeaderSearch from './HeaderSearch'

export default {
  name: 'Header',
  components: {
    HeaderBar,
    HeaderSearch
  },
  props: {
    userInfo: {
      type: Object,
      default() {
        return null
      }
    },
    localCity: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    handleLogout() {
      this.logout()
    }
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/sass/variables.scss"
.header-wrap
  background-color: #fff
  box-shadow: 0 2px 27px 0 rgba(0,0,0,.1)
</style>
