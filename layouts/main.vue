<template>
  <div>
    <mt-header
      :user-info="userInfo"
      :local-city="localCity"/>
    <nuxt/>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import MtHeader from '../components/header/Header'
export default {
  name: 'Index',
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: #f8f8f8;
}
</style>
