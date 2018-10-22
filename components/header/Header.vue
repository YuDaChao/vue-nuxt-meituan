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
import { mapActions, mapState, mapMutations } from 'vuex'
import HeaderBar from './HeaderBar'
import HeaderSearch from './HeaderSearch'

export default {
  name: 'Header',
  components: {
    HeaderBar,
    HeaderSearch
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      localCity: state => state.localCity
    })
  },
  mounted() {
    this.getLocalCity()
  },
  methods: {
    ...mapMutations(['setLocalCity']),
    ...mapActions({
      logout: 'user/logout'
    }),
    handleLogout() {
      this.logout()
    },
    getLocalCity() {
      const _this = this
      let localCity = new BMap.LocalCity()
      localCity.get(function(result) {
        const localCity = result.name
        _this.setLocalCity(localCity)
      })
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
