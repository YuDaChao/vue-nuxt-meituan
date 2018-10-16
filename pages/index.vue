<template>
  <section class="container">
    <mt-header
      :user-info="userInfo"
      :local-city="localCity"/>
    <nuxt-child />
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MtHeader from '../components/header/Header'

export default {
  components: {
    MtHeader
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

<style lang="sass">
</style>
