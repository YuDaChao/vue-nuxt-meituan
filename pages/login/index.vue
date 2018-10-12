<template>
  <div class="login">
    <div class="content">
      <div class="login-img">
        <img src="~static/images/login.jpeg">
      </div>
      <div class="login-form">
        <el-card
          shadow="never"
          class="box-card">
          <div slot="header">
            <span>账号登录</span>
          </div>
          <el-form ref="form">
            <el-form-item>
              <el-input
                placeholder="邮箱"
                prefix-icon="el-icon-message"/>
            </el-form-item>
            <el-form-item>
              <el-input
                placeholder="密码"
                prefix-icon="el-icon-view"/>
            </el-form-item>
            <el-form-item>
              <el-checkbox
                label="七天自动登录"
                name="type"/>
            </el-form-item>
            <el-form-item style="margin-bottom: 0">
              <el-button
                type="primary"
                style="width: 100%">登录</el-button>
            </el-form-item>
            <el-form-item style="margin-bottom: 0">
              <span>还有没账号?</span>
              <nuxt-link
                class="register"
                to="/register">免费注册</nuxt-link>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li class="first">
          <a href="#">关于美团</a>
        </li>
        <li>
          <a href="#">美团承诺</a>
        </li>
        <li>
          <a href="#">加入我们</a>
        </li>
        <li>
          <a href="#">商家入驻</a>
        </li>
        <li>
          <a href="#">帮助中心</a>
        </li>
        <li>
          <a href="#">美团手机版</a>
        </li>
      </ul>
      <img
        class="commitment"
        src="~/static/images/footer-commitment.png">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="sass">
@import "../../assets/sass/variables.scss"
.login
  width: 960px
  margin: 54px auto 0
  .content
    display: flex
    margin-bottom: 30px
    .login-img
      flex: 1
      margin-right: 20px
    .login-form
      width: 350px
      .register
        color: $primary-color
  .footer
    display: flex
    padding: 12px 0
    border-top: 1px solid #eee
    border-bottom: 1px solid #eee
    ul
      display: flex
      flex: 0 0 595px
      width: 595px
      li
        margin: 5px 0
        padding: 0 16px
        line-height: 1
        border-right: 1px solid #eee
        &.first
          padding-left: 0
    .commitment
      width: 276px
      height: 24px
</style>
