<template>
  <div class="header-wrap">
    <header-bar
      :user-info="userInfo"
      :local-city="localCity"
      @handleLogout="handleLogout"
    />
    <header-search/>
    <div class="header-nav-list">
      <div class="category-nav-content">
        <div class="category-nav-item">美团外卖</div>
        <div class="category-nav-item">猫眼电影</div>
        <div class="category-nav-item">美团酒店</div>
        <div class="category-nav-item">民宿 / 公寓</div>
        <div class="category-nav-item">商家入住</div>
        <div class="category-nav-item">美团公益</div>
      </div>
    </div>
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
  .header-nav-list
    width: 960px
    margin: 0 auto
    padding-bottom: 10px
    .category-nav-content
      display: flex
      align-items: center
      height: 32px
      margin-left: 266px
      .category-nav-item
        color: #222
        font-weight: 700
        font-size: 16px
        margin: 0 20px
        cursor: pointer
        &:nth-child(1):hover
          color: #FBC703
        &:nth-child(2):hover
          color: #ed1e24
        &:nth-child(3):hover
          color: $primary-color
        &:nth-child(4):hover
          color: #FBC703
        &:nth-child(5):hover
          color: #ed1e24
        &:nth-child(6):hover
          color: $primary-color


</style>
