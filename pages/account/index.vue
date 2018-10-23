<template>
  <div class="account-wrapper">
    <mt-header/>
    <div class="account-content">
      <div class="left-nav">
        <div class="link-group">
          <p class="title">
            <a href="#">我的美团</a>
          </p>
          <p class="title">
            <a href="#">我的订单</a>
          </p>
          <ul class="link-ul">
            <li>
              <a href="#">全部订单</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
            <li>
              <a href="#">待付款</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
            <li>
              <a href="#">待使用</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
            <li>
              <a href="#">待评价</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
            <li>
              <a href="#">退款/守候</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
          </ul>
        </div>
        <div class="link-group">
          <p class="title">
            <a href="#">我的收藏</a>
          </p>
          <ul class="link-ul">
            <li>
              <a href="#">收藏的商家</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
            <li>
              <a href="#">收藏的团购</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
          </ul>
        </div>
        <div class="link-group">
          <p class="title">
            <a href="#">抵用券</a>
          </p>
          <ul class="link-ul">
            <li>
              <a href="#">可用券</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
            <li>
              <a href="#">失效券</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
          </ul>
        </div>
        <div class="link-group">
          <p class="title">
            <a href="#">个人信息</a>
          </p>
          <ul class="link-ul">
            <li>
              <a href="#">账户设置</a>
              <i class="iconfont icon-jiantouyou"/>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
import MtHeader from '../../components/header/Header'
export default {
  middleware: 'authenticated',
  components: {
    MtHeader
  },
  mounted() {
    if (this.$route.path === '/account') {
      this.$router.replace('/account/userinfo')
    }
  }
}
</script>


<style scoped lang="sass" rel="stylesheet/sass">
  .account-content
    width: 960px
    margin: 20px auto 0
    display: flex
    .left-nav
      flex:  0 0 232px
      width: 232px
      background-color: #fff
      border: 1px solid #e5e5e5
      border-radius: 4px
      padding-bottom: 20px
      margin-right: 20px
      .link-group
        font-size: 16px
        color: #222
        margin: 30px 20px 0 30px
        .title
          margin: 12px 0
          a
            font-size: 16px
            color: #222
            font-weight: 500
        .link-ul
          li
            display: flex
            margin: 15px 0
            a
              flex: 1
              font-size: 14px
              color: #666
            .icon-jiantouyou
              font-size: 12px
              color: #666
    .right-content
      flex: 1
</style>
