<template>
  <section class="container">
    <mt-header :user-info="userInfo"/>
    <nuxt-child />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MtHeader from '../components/header/Header'

export default {
  components: {
    MtHeader
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  }
}
</script>

<style lang="sass">
</style>
