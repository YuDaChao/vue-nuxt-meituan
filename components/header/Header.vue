<template>
  <div class="header-wrap">
    <div class="header-bar">
      <div class="header-content">
        <div class="header-bar-position">
          <i class="iconfont icon-address"/>
          <span class="current-city">固安县</span>
          <a
            href="#"
            class="change-city">切换城市</a>
          <div class="near-citys">
            [
            <a
              href="#"
              class="city-guess">涿州</a>
            <a
              href="#"
              class="city-guess">霸州</a>
            <a
              href="#"
              class="city-guess">廊坊</a>
            ]
          </div>
          <div
            v-if="!userInfo"
            class="user-entry">
            <nuxt-link
              to="/login"
              class="user-login">立即登录</nuxt-link>
            <a
              href="#"
              class="user-register">注册</a>
          </div>
          <div
            v-else
            class="user-entry">
            <nuxt-link
              to="/"
              class="user-login">{{ userInfo.username }}</nuxt-link>
            <a
              href="#"
              class="user-register"
              @click.stop.prevent="handleLogout">退出</a>
          </div>
        </div>
        <div class="header-bar-nav">
          <div class="nav-item">我的美团</div>
          <div class="nav-item">手机APP</div>
          <div class="nav-item">商家中心</div>
          <div class="nav-item">网站导航</div>
        </div>
      </div>
    </div>
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
export default {
  name: 'Header',
  props: {
    userInfo: {
      type: Object,
      default() {
        return null
      }
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
  .header-bar
    background-color: #f7f7f7
    color: #999
    height: 40px
    width: 100%
    .header-content
      width: 960px
      height: 100%
      margin: 0 auto
      @include flex-sb
      .header-bar-position, .header-bar-nav
        height: 100%
        display: flex
        align-items: center
      .header-bar-position
        .icon-address
          font-size: 12px
          margin-top: 2px
        .current-city
          color: #666
        .change-city:hover
          color: $primary-color
        .change-city
          background: #F4F4F4
          border: 1px solid #E5E5E5
          border-radius: 2px
          color: #666
          margin: 0 4px
          padding: 0 2px
        .user-entry
          margin-left: 15px
          .user-login
            color: $primary-color
      .header-bar-nav
        .nav-item
          padding: 12px 14px
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
