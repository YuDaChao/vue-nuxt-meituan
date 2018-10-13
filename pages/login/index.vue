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
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules">
            <el-form-item prop="email">
              <el-input
                v-model="loginForm.email"
                placeholder="邮箱"
                prefix-icon="el-icon-message"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
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
                style="width: 100%"
                @click="submitLoginForm('loginForm')">登录</el-button>
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
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      loginRules: {
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'user/setUserInfo'
    }),
    submitLoginForm(formName) {
      const _this = this
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const result = await _this.$axios.post('/users/login', {
            ...this.loginForm
          })
          if (result.status === 1) {
            _this.$notify.error({
              title: '登录失败',
              message: result.message
            })
          } else {
            _this.setUserInfo(result.data)
            this.$router.push('/')
          }
        } else {
          return false
        }
      })
    }
  }
}
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
