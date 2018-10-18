<template>
  <div class="header-bar">
    <div class="header-content">
      <div class="header-bar-position">
        <i class="iconfont icon-address"/>
        <span class="current-city">{{ localCity }}</span>
        <nuxt-link
          to="/changecity"
          class="change-city">切换城市</nuxt-link>
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
</template>

<script>
export default {
  name: 'HeaderBar',
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
    handleLogout() {
      this.$emit('handleLogout')
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../../assets/sass/variables.scss"
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
</style>
