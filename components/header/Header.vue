<template>
  <div class="header-wrap">
    <header-bar
      :user-info="userInfo"
      :local-city="localCity"
      @handleLogout="handleLogout"
    />
    <div class="header-search">
      <div class="header-logo">
        <img src="../../static/images/logo.png">
      </div>
      <div class="header-search-module">
        <el-input
          placeholder="搜索商家或地点"
          class="input-with-select">
          <el-button
            slot="append"
            icon="el-icon-search"/>
        </el-input>
        <div class="header-hot-words">
          <a
            href="#"
            class="hot-word">好士牛排</a>
          <a
            href="#"
            class="hot-word">7天连锁酒店</a>
          <a
            href="#"
            class="hot-word">胡桃里音乐酒馆</a>
          <a
            href="#"
            class="hot-word">易佰良品酒店</a>
        </div>
      </div>
    </div>
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
export default {
  name: 'Header',
  components: {
    HeaderBar
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

<style lang="sass">
@import "../../assets/sass/variables.scss"
.header-wrap
  background-color: #fff
  box-shadow: 0 2px 27px 0 rgba(0,0,0,.1)
  .header-search
    width: 960px
    margin: 0 auto
    display: flex
    .header-logo
      padding: 28px 160px 40px 0
      img
        width: 126px
        height: 46px
    .header-search-module
      width: 550px
      padding-top: 30px
      .header-hot-words
        padding: 8px 0 0 12px
        .hot-word
          color: #999999
          margin: 3px 10px 0 0
          &:hover
            color: $primary-color
  .el-input-group__append
    background-color: $primary-color
    border-color: $primary-color
    color: #fff
    padding: 0 30px
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
