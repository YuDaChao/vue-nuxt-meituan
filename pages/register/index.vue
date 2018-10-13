<template>
  <div class="register">
    <div class="register-content">
      <div class="header">
        <div class="logo">
          <img src="~static/images/logo.png">
        </div>
        <div class="login-block">
          <span class="text">已有美团账号?</span>
          <el-button
            size="small"
            type="primary">登录</el-button>
        </div>
      </div>
    </div>
    <div class="register-main">
      <el-form
        ref="registerForm"
        :model="registerForm"
        :rules="registerRules"
        :hide-required-asterisk="true"
        label-position="right"
        label-width="80px">
        <el-form-item
          prop="userName"
          label="用户名">
          <el-input
            v-model="registerForm.userName"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱">
          <el-input
            v-model="registerForm.email"
            placeholder="邮箱">
            <el-button
              slot="append"
              :disabled="disabledSendCode"
              @click="getCode">{{ emailTip }}</el-button>
          </el-input>
        </el-form-item>
        <el-form-item
          prop="code"
          label="验证码">
          <el-input
            v-model="registerForm.code"
            placeholder="验证码"/>
        </el-form-item>
        <el-form-item
          prop="password"
          label="创建密码">
          <el-popover
            ref="popover"
            placement="right"
            title="密码强度"
            width="200"
            trigger="focus">
            <el-slider
              :step="2"
              :min="0"
              :max="10"
              :class="sliderBarClass"
              :format-tooltip="formatTooltip"
              v-model="sliderVal"
              show-stops/>
          </el-popover>
          <el-input
            v-popover:popover
            v-model="password"
            type="password"
            placeholder="密码"
          />
        </el-form-item>
        <el-form-item
          prop="rePassword"
          label="确认密码">
          <el-input
            v-model="registerForm.rePassword"
            type="password"
            placeholder="确认密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitRegisterForm('registerForm')">同意一下协议并注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        if (value.length < 6 || value.length > 12) {
          callback(new Error('长度在 6 到 12 个字符'))
        } else {
          callback()
        }
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入邮箱'))
      } else {
        const reg = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/
        if (!reg.test(value)) {
          callback(new Error('输入邮箱不合法'))
        } else {
          callback()
        }
      }
    }
    const validateCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'))
      } else {
        if (value.length !== 4) {
          callback(new Error('验证码错误'))
        } else {
          callback()
        }
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else {
        if (value.length < 6) {
          callback(new Error('长度至少 6 个字符'))
        } else {
          callback()
        }
      }
    }
    const validateRepassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'))
      } else {
        if (value !== this.registerForm.password) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      }
    }
    return {
      sliderVal: 0,
      timeDown: 60,
      isRequestCode: false,
      password: '',
      registerForm: {
        userName: '',
        email: '',
        code: '',
        password: '',
        rePassword: ''
      },
      registerRules: {
        userName: [{ validator: validateUserName, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        code: [{ validator: validateCode, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
        rePassword: [{ validator: validateRepassword, trigger: 'blur' }]
      }
    }
  },
  computed: {
    sliderBarClass() {
      const sliderVal = this.sliderVal
      if (sliderVal <= 4) return 'ruo'
      if (sliderVal <= 8) return 'zhong'
      if (sliderVal > 8) return 'qiang'
    },
    emailTip() {
      return this.isRequestCode ? `${this.timeDown}秒后重试` : '获取验证码'
    },
    disabledSendCode() {
      return this.registerForm.email === '' || this.isRequestCode
    }
  },
  watch: {
    password(value) {
      this.registerForm.password = value
      this.sliderVal = Math.floor(value.length / 2)
    }
  },
  methods: {
    submitRegisterForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register(this.registerForm)
        } else {
          return false
        }
      })
    },
    formatTooltip(value) {
      if (value <= 4) return '弱'
      if (value <= 8) return '中'
      if (value > 8) return '强'
    },
    getCode() {
      this.isRequestCode = true
      this.sendEmail()
      this.timer = setInterval(() => {
        if (this.timeDown > 0) {
          this.timeDown--
        } else {
          // 清除验证码
          this.$axios.get('/clear_code')
          this.timeDown = 60
          this.isRequestCode = false
          this.timer && clearInterval(this.timer)
        }
      }, 1000)
    },
    async sendEmail() {
      const result = await this.$axios.post('/send_mail', {
        email: this.registerForm.email
      })
      if (result.status === 1) {
        this.$message.error(result.message)
      } else {
        this.$message({
          message: result.message,
          type: 'success'
        })
      }
    },
    async register(registerForm) {
      const result = await this.$axios.post('/users/register', {
        ...registerForm
      })
      if (result.status === 1) {
        this.$message({
          message: result.message,
          type: 'warning'
        })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped lang="sass">
.register-content
  border-bottom: 2px solid #2bb8aa
  .header
    width: 960px
    margin: 0 auto
    display: flex
    align-items: center
    justify-content: space-between
    padding: 10px 0
    .logo
      img
        width: 150px
        height: 50px
    .login-block
      .text
        font-size: 14px
        margin-right: 5px
        color: #666
.register-main
  width: 460px
  margin: 20px auto 0
</style>
<style lang="sass">
.ruo
  .el-slider__bar
    background: #F5622E
  .el-slider__button
    border: 2px solid #F5622E
.zhong
  .el-slider__bar
    background: #FD8925
  .el-slider__button
    border: 2px solid #FD8925
.qiang
  .el-slider__bar
    background: #5EAA43
  .el-slider__button
    border: 2px solid #5EAA43
</style>
