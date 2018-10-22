<template>
  <div class="user-info-box">
    <div class="user-info">
      <div class="header-img">
        <img src="/images/banner/head-img.png">
      </div>
      <div class="nick-name">
        <p class="nick-name-txt">虞大超</p>
        <p class="user-money">
          我的余额：￥0
          <span>充值卡充值</span>
        </p>
      </div>
      <p class="user-setting">个人信息设置></p>
    </div>
    <div class="userfn-ls">
      <ul class="userfn-ul">
        <li>
          <i class="iconfont icon-dingdan"/>
          <span class="txt">全部订单</span>
        </li>
        <li>
          <i class="iconfont icon-daifukuancopy"/>
          <span class="txt">待付款</span>
        </li>
        <li>
          <i class="iconfont icon-diyongquan"/>
          <span class="txt">待使用</span>
        </li>
        <li>
          <i class="iconfont icon-pinglun"/>
          <span class="txt">待评论</span>
        </li>
        <li>
          <i class="iconfont icon-tuikuan"/>
          <span class="txt">退款/售后</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../../../../assets/sass/variables"
  .user-info-box
    background-color: #fff
    border: 1px solid #e5e5e5
    border-radius: 4px
    box-shadow: 0 5px 14px 0 rgba(0,0,0,.1)
    .user-info
      display: flex
      align-items: center
      width: 100%
      height: 209px
      background: $primary-color
      background-image: linear-gradient(-90deg,#16ABB7 3%,#13D1BE 98%)
      border-radius: 4px 4px 0 0
      .header-img
        width: 130px
        height: 130px
        border: 10px solid #88E2D9
        margin-left: 30px
        border-radius: 100%
      .nick-name
        color: #fff
        font-weight: 500
        margin-left: 20px
        cursor: pointer
        .nick-name-txt
          font-size: 26px
          margin-bottom: 5px
          line-height: 1
        .user-money
          font-size: 14px
          color: #fff
          span
            cursor: pointer
      .user-setting
        flex: 1
        text-align: right
        font-size: 14px
        color: #fff
        margin-right: 30px
        cursor: pointer
    .userfn-ls
      width: 100%
      height: 110px
      line-height: 110px
      background-color: #fff
      border-radius: 0 0 4px 4px
      .userfn-ul
        display: flex
        align-items: center
        justify-content: space-around
        .iconfont
          font-size: 32px
          vertical-align: middle
        .txt
          font-size: 14px
          color: #222
          margin-left: 10px
          vertical-align: middle
        .icon-dingdan
          color: #13D1BE
        .icon-daifukuancopy
          color: #72BAFF
        .icon-diyongquan
          color: #FF5E6F
        .icon-pinglun
          color: #FFBD31
          font-size: 38px
        .icon-tuikuan
          color: #7E87FB
</style>
