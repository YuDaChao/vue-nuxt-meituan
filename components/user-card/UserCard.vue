<template>
  <div class="user-card">
    <div
      v-if="!userInfo"
      class="banner-login-content">
      <div class="header-img">
        <img
          src="~static/images/banner/avatar.jpg"
          class="avatar-img">
      </div>
      <div class="user-name">Hi！你好</div>
      <div class="register-btn user-btn">
        <el-button
          round
          @click="handleRegister">注册</el-button>
      </div>
      <div class="login-btn user-btn">
        <el-button
          round
          @click="handleLogin">立即登录</el-button>
      </div>
    </div>
    <div
      v-else
      class="banner-login-content">
      <div class="setting">
        <i class="el-icon-setting"/>
      </div>
      <div class="header-img">
        <nuxt-link to="/account/userinfo">
          <img
            src="~static/images/banner/head-img.png"
            class="avatar-img">
        </nuxt-link>
      </div>
      <div class="user-name">{{ userInfo.username }}</div>
      <div class="user-row first">
        <div class="user-row-item">
          <div class="icon">
            <i class="iconfont icon-dingdan"/>
          </div>
          <p class="row-name">我的订单</p>
        </div>
        <div class="user-row-item">
          <div class="icon">
            <i class="iconfont icon-shoucang"/>
          </div>
          <p class="row-name">我的收藏</p>
        </div>
        <div class="user-row-item">
          <div class="icon">
            <i class="iconfont icon-diyongquan"/>
          </div>
          <p class="row-name">抵用券</p>
        </div>
      </div>
      <div class="user-row">
        <div class="user-row-item">
          <div class="icon">
            <i class="iconfont icon-jine"/>
          </div>
          <p class="row-name">余额</p>
        </div>
        <div class="user-row-item">
          <div class="icon">
            <i class="iconfont icon-gengduo"/>
          </div>
          <p class="row-name">更多</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    userInfo: {
      type: Object,
      default() {
        return null
      }
    }
  },
  methods: {
    handleRegister() {
      this.$router.push('/register')
    },
    handleLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/variables"
  .user-card
    position: relative
  .banner-login-content
    padding-top: 30px
    .setting
      position: absolute
      top: 5px
      right: 5px
      cursor: pointer
      .el-icon-setting
        color: #666
        font-size: 17px
    .header-img
      margin: 0 auto 4px
      .avatar-img
        width: 55px
        height: 55px
        border-radius: 55px
        border: 4px solid #E5E5E5
        cursor: pointer
    .user-name
      width: 6em
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      font-weight: 500
      font-size: 16px
      color: #222
      margin: 0 auto
      cursor: pointer
    .user-row
      width: 100%
      display: flex
      padding:  0 15px
      align-items: center
      cursor: pointer
      &.first
        margin-top: 10px
      .user-row-item
        width: 33.33%
        .iconfont
          color: $primary-color-2
        .row-name
          font-size: 12px
          color: #222
          margin: 5px 0
    .user-btn
      margin: 10px 0
      .el-button.is-round
        width: 120px
</style>
