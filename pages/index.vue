<template>
  <section class="container">
    <mt-header/>
    <div class="banner-wrap">
      <div class="banner-content">
        <div class="left-banner">
          <div class="category-content">
            <div class="category-title">全部分类</div>
            <ul
              @mouseleave="leave">
              <li
                class="nav-li"
                @mouseenter="enter(0)">
                <span>美食</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(1)">
                <span>外卖</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(2)">
                <span>酒店</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(3)">
                <span>榛果民宿</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(4)">
                <span>猫眼电影</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(5)">
                <span>机票 / 火车票</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(6)">
                <span>休闲娱乐 / KTV</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(7)">
                <span>生活服务</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(8)">
                <span>丽人 / 美发 / 医学美容</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(9)">
                <span>结婚 / 婚纱摄影 / 婚宴</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(10)">
                <span>亲子 / 儿童乐园 / 幼教</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(11)">
                <span>运动健身 / 健身中心</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(12)">
                <span>家装 / 建材 / 家居</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(13)">
                <span>学习培训 / 音乐培训</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(14)">
                <span>医疗健康 / 宠物 / 爱车</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
              <li
                class="nav-li"
                @mouseenter="enter(15)">
                <span>酒吧 / 密室逃脱</span>
                <i class="iconfont icon-jiantouyou" />
              </li>
            </ul>
          </div>
          <div
            :class="{active: showCategoryWrap}"
            class="category-nav-detail-wrapper"
            @mouseenter="enterWrap"
            @mouseleave="leave">
            <div
              :class="{active: currentCategoryIndex === 0}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">美食</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">代金券</a>
                  <a class="detail-title">甜点饮品</a>
                  <a class="detail-title">火锅</a>
                  <a class="detail-title">自助餐</a>
                  <a class="detail-title">小吃</a>
                  <a class="detail-title">快餐</a>
                  <a class="detail-title">日韩料理</a>
                  <a class="detail-title">西餐</a>
                  <a class="detail-title">聚餐宴请</a>
                  <a class="detail-title">烧烤烤肉</a>
                  <a class="detail-title">东北菜</a>
                  <a class="detail-title">川湘菜</a>
                  <a class="detail-title">江浙菜</a>
                  <a class="detail-title">香锅烤鱼</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 1}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">外卖</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">美团外卖</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 2}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">酒店</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">经济型</a>
                  <a class="detail-title">舒适/三星</a>
                  <a class="detail-title">高档/四星</a>
                  <a class="detail-title">豪华/五星</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 3}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">榛果民宿</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">上海</a>
                  <a class="detail-title">成都</a>
                  <a class="detail-title">北京</a>
                  <a class="detail-title">重庆</a>
                  <a class="detail-title">南京</a>
                  <a class="detail-title">杭州</a>
                  <a class="detail-title">广州</a>
                  <a class="detail-title">西安</a>
                  <a class="detail-title">大连</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 4}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">猫眼电影</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">无双</a>
                  <a class="detail-title">李茶的姑妈</a>
                  <a class="detail-title">影</a>
                  <a class="detail-title">胖子行动队</a>
                  <a class="detail-title">找到你</a>
                  <a class="detail-title">悲伤逆流成河</a>
                  <a class="detail-title">新灰姑娘</a>
                  <a class="detail-title">阿凡提之奇缘历险</a>
                  <a class="detail-title">嗝嗝老师</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 5}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">机票 / 火车票</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">火车票</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 6}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">休闲娱乐</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">足疗按摩</a>
                  <a class="detail-title">洗浴/汗蒸</a>
                  <a class="detail-title">酒吧</a>
                  <a class="detail-title">密室逃脱</a>
                  <a class="detail-title">轰趴馆</a>
                  <a class="detail-title">茶馆</a>
                  <a class="detail-title">私人影院</a>
                  <a class="detail-title">DIY手工坊</a>
                  <a class="detail-title">采摘/农家乐</a>
                  <a class="detail-title">网吧网咖</a>
                  <a class="detail-title">游乐游艺</a>
                  <a class="detail-title">桌面游戏</a>
                  <a class="detail-title">真人CS</a>
                  <a class="detail-title">棋牌室</a>
                </div>
              </div>
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">KTV</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">KTV</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 7}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">生活服务</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">衣物/皮具洗护</a>
                  <a class="detail-title">家政</a>
                  <a class="detail-title">搬家运输</a>
                  <a class="detail-title">送水</a>
                  <a class="detail-title">充值缴费</a>
                  <a class="detail-title">服饰/鞋包养护</a>
                  <a class="detail-title">开锁换锁</a>
                  <a class="detail-title">居家维修</a>
                  <a class="detail-title">管道疏通</a>
                  <a class="detail-title">家电维修清洗</a>
                  <a class="detail-title">电脑维修</a>
                  <a class="detail-title">手机维修</a>
                  <a class="detail-title">证件照/肖像摄影</a>
                  <a class="detail-title">商务服务/法律服务</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 8}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">丽人</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">美发</a>
                  <a class="detail-title">美甲美睫</a>
                  <a class="detail-title">美容美体</a>
                  <a class="detail-title">医学美容</a>
                  <a class="detail-title">瑜伽舞蹈</a>
                  <a class="detail-title">瘦身纤体</a>
                  <a class="detail-title">韩式定妆</a>
                  <a class="detail-title">祛痘</a>
                  <a class="detail-title">纹身</a>
                  <a class="detail-title">纹身</a>
                </div>
              </div>
            </div>
            <div
              :class="{active: currentCategoryIndex === 9}"
              class="category-nav-detail">
              <div class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">结婚</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a class="detail-title">婚纱摄影</a>
                  <a class="detail-title">旅拍</a>
                  <a class="detail-title">个性写真</a>
                  <a class="detail-title">婚宴</a>
                  <a class="detail-title">婚庆公司</a>
                  <a class="detail-title">婚纱礼服</a>
                  <a class="detail-title">西服定制</a>
                  <a class="detail-title">婚戒首饰</a>
                  <a class="detail-title">婚车租赁</a>
                  <a class="detail-title">司仪主持</a>
                  <a class="detail-title">彩妆造型</a>
                  <a class="detail-title">婚礼跟拍</a>
                  <a class="detail-title">婚礼小礼品</a>
                  <a class="detail-title">更多婚礼服务</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-banner">
          <div class="banner-row">
            <div class="banner-slider">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div
                    v-for="(banner, index) in banners"
                    :key="index"
                    class="swiper-slide">
                    <img :src="banner">
                  </div>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"/>
              </div>
            </div>
            <div class="banner-login-card">
              <div class="banner-login-content">
                <div class="header-img">
                  <img
                    src="~static/images/banner/avatar.jpg"
                    class="avatar-img">
                </div>
                <div class="user-name">Hi！你好</div>
                <div class="register-btn user-btn">
                  <el-button round>注册</el-button>
                </div>
                <div class="login-btn user-btn">
                  <el-button round>立即登录</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="banner-row">
            <div class="pic1 item">
              <img src="~static/images/banner/7.png">
            </div>
            <div class="pic2 item">
              <img src="~static/images/banner/8.jpg">
            </div>
            <div class="qr-wrap item">
              <div class="pic3">
                <img src="~static/images/banner/download-qr.png">
              </div>
              <div class="app-name">美团APP手机版</div>
              <p class="ql">
                <span class="red">1元起</span>
                <span class="green">吃喝玩乐</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MtHeader from '../components/header/Header'

export default {
  components: {
    MtHeader
  },
  data() {
    return {
      banners: [
        '/images/banner/1.jpg',
        '/images/banner/2.jpg',
        '/images/banner/3.jpg',
        '/images/banner/4.jpg',
        '/images/banner/5.jpg'
      ],
      swiperOption: {
        loop: true,
        // effect: 'fade',
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
          // clickable: true,
          dynamicBullets: true
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this)
          },
          tap() {
            // console.log('onTap', this)
          }
        }
      },
      showCategoryWrap: false,
      currentCategoryIndex: 0
    }
  },
  methods: {
    enter(index) {
      this.showCategoryWrap = true
      this.currentCategoryIndex = index
    },
    enterWrap() {
      this.showCategoryWrap = true
    },
    leave() {
      this.showCategoryWrap = false
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/variables.scss"
.banner-wrap
  width: 960px
  margin: 0 auto
  position: relative
  .banner-content
    display: flex
    .left-banner
      position: relative
      flex: 0 0 230px
      width: 230px
      height: 475px
      color: #fff
      margin-top: -50px
      background: -webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%)
      .category-content
        .category-title
          font-size: 16px
          font-weight: 400
          margin: 12px 0 0 15px
          height: 38px
        ul
          margin-top: 10px
          li
            height: 26px
            padding: 2px 12px
            display: flex
            align-items: center
            &:hover
              background: rgba(255,255,255,.2)
            span
              flex: 1
              font-size: 13px
              color: #fff
              cursor: pointer
            .icon-jiantouyou
              font-size: 12px
      .category-nav-detail-wrapper
        position: absolute
        left: 230px
        top: 60px
        width: 400px
        height: 415px
        background: #fff
        z-index: 199
        overflow: hidden
        color: #666
        display: none
        &.active
          display: block
        .category-nav-detail
          padding: 0 30px
          display: none
          &.active
            display: block
          .detail-title-wrapper
            display: flex
            align-items: center
            margin-top: 24px
            padding-bottom: 10px
            border-bottom: 1px solid #e5e5e5
            .category-name
              flex: 1
              font-size: 16px
              font-weight: 500
              color: #222
              cursor: pointer
            .more
              font-size: 12px
              color: #999
              font-weight: 400
              cursor: pointer
            .icon-jiantouyou
              font-size: 12px
              color: #999
          .detail-content
            .detail-title
              display: inline-block
              font-size: 12px
              color: #999
              margin: 10px 16px 0 0
              cursor: pointer
              &:hover
                color: $primary-color
    .right-banner
      margin: 10px 0 0 10px
      .banner-row
        display: flex
        .banner-slider
          width: 470px
          height: 240px
          overflow: hidden
          .swiper-wrapper
            width: 100%
            height: 240px
            img
              width: 100%
              height: 100%
        .banner-login-card
          width: 230px
          height: 240px
          margin-left: 10px
          background-color: #fff
          border: 1px solid #e5e5e5
          text-align: center
          .banner-login-content
            padding-top: 30px
            .header-img
              margin: 0 auto 4px
              .avatar-img
                width: 55px
                height: 55px
                border-radius: 55px
                border: 4px solid #E5E5E5
            .user-name
              width: 6em
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
              font-weight: 500
              font-size: 16px
              color: #222
              margin: 0 auto
            .user-btn
              margin: 10px 0
              .el-button.is-round
                width: 120px
        .item
          width: 230px
          height: 165px
          margin: 10px 10px 0 0
          img
            width: 100%
            height: 165px
          &:last-child
            margin: 10px 0 0
        .qr-wrap
          background-color: #fff
          border: 1px solid #e5e5e5
          .pic3
            margin: 7px auto 2px
            text-align: center
            img
              width: 95px
              height: 95px
          .app-name
            font-size: 16px
            font-weight: 500
            color: #222
            text-align: center
          .ql
            text-align: center
            font-size: 12px
            font-weight: 500
            .red
              color: #EC5330
              margin-right: 5px
</style>
