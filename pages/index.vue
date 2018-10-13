<template>
  <section class="container">
    <mt-header :user-info="userInfo"/>
    <div class="banner-wrap">
      <div class="banner-content">
        <div class="left-banner">
          <div class="category-content">
            <div class="category-title">全部分类</div>
            <ul
              @mouseleave="leave">
              <li
                v-for="category in categoryList"
                :key="category.id"
                class="nav-li"
                @mouseenter="enter(category.id)">
                <span>{{ category.name }}</span>
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
              :class="{active: currentShowCategory.length > 0}"
              class="category-nav-detail">
              <div
                v-for="(sc, index) in currentShowCategory"
                :key="index"
                class="detail-area">
                <div class="detail-title-wrapper">
                  <h2 class="category-name">{{ sc.title }}</h2>
                  <span class="more">更多</span>
                  <i class="iconfont icon-jiantouyou" />
                </div>
                <div class="detail-content">
                  <a
                    v-for="item in sc.list"
                    :key="item.s_id"
                    class="detail-title">{{ item.name }}</a>
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
              <user-card :user-info="userInfo"/>
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
    <div class="scenes-container">
      <div class="quality-container">
        <div class="index-nav-container">
          <ul>
            <li class="title nav-item mf-shang-hei-regular">有格调</li>
            <li class="nav-item active">全部</li>
          </ul>
        </div>
        <div class="quality-area">
          <a class="link quality-card">
            <div class="quality-img">
              <img
                src="/images/quality/1.jpg"
                class="image">
            </div>
            <div class="poi-info">
              <div class="title">廊坊固安福朋喜来登酒店</div>
              <div class="tags-wrapper">
                <div class="tag">酒店套餐</div>
                <div class="tag">亲子场景酒店</div>
                <div class="tag">发票推荐</div>
                <div class="tag">亲子酒店点评</div>
                <div class="tag">含早</div>
              </div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol">¥</span>
                  <span class="current-price">
                    <span class="price">842</span>
                    <span class="current-price-type">/起</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
          <a class="link quality-card">
            <div class="quality-img">
              <img
                src="/images/quality/1.jpg"
                class="image">
            </div>
            <div class="poi-info">
              <div class="title">廊坊固安福朋喜来登酒店</div>
              <div class="tags-wrapper">
                <div class="tag">酒店套餐</div>
                <div class="tag">亲子场景酒店</div>
                <div class="tag">发票推荐</div>
                <div class="tag">亲子酒店点评</div>
                <div class="tag">含早</div>
              </div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol">¥</span>
                  <span class="current-price">
                    <span class="price">842</span>
                    <span class="current-price-type">/起</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
          <a class="link quality-card">
            <div class="quality-img">
              <img
                src="/images/quality/1.jpg"
                class="image">
            </div>
            <div class="poi-info">
              <div class="title">廊坊固安福朋喜来登酒店</div>
              <div class="tags-wrapper">
                <div class="tag">酒店套餐</div>
                <div class="tag">亲子场景酒店</div>
                <div class="tag">发票推荐</div>
                <div class="tag">亲子酒店点评</div>
                <div class="tag">含早</div>
              </div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol">¥</span>
                  <span class="current-price">
                    <span class="price">842</span>
                    <span class="current-price-type">/起</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
          <a class="link quality-card">
            <div class="quality-img">
              <img
                src="/images/quality/1.jpg"
                class="image">
            </div>
            <div class="poi-info">
              <div class="title">廊坊固安福朋喜来登酒店</div>
              <div class="tags-wrapper">
                <div class="tag">酒店套餐</div>
                <div class="tag">亲子场景酒店</div>
                <div class="tag">发票推荐</div>
                <div class="tag">亲子酒店点评</div>
                <div class="tag">含早</div>
              </div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol">¥</span>
                  <span class="current-price">
                    <span class="price">842</span>
                    <span class="current-price-type">/起</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
          <a class="link quality-card">
            <div class="quality-img">
              <img
                src="/images/quality/1.jpg"
                class="image">
            </div>
            <div class="poi-info">
              <div class="title">廊坊固安福朋喜来登酒店</div>
              <div class="tags-wrapper">
                <div class="tag">酒店套餐</div>
                <div class="tag">亲子场景酒店</div>
                <div class="tag">发票推荐</div>
                <div class="tag">亲子酒店点评</div>
                <div class="tag">含早</div>
              </div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol">¥</span>
                  <span class="current-price">
                    <span class="price">842</span>
                    <span class="current-price-type">/起</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
          <a class="link quality-card">
            <div class="quality-img">
              <img
                src="/images/quality/1.jpg"
                class="image">
            </div>
            <div class="poi-info">
              <div class="title">廊坊固安福朋喜来登酒店</div>
              <div class="tags-wrapper">
                <div class="tag">酒店套餐</div>
                <div class="tag">亲子场景酒店</div>
                <div class="tag">发票推荐</div>
                <div class="tag">亲子酒店点评</div>
                <div class="tag">含早</div>
              </div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol">¥</span>
                  <span class="current-price">
                    <span class="price">842</span>
                    <span class="current-price-type">/起</span>
                  </span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MtHeader from '../components/header/Header'
import UserCard from '../components/user-card/UserCard'

export default {
  components: {
    MtHeader,
    UserCard
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
      currentShowCategory: [],
      categoryList: [],
      secondCategoryList: []
    }
  },
  async asyncData({ app }) {
    const result = await app.$axios.get('/category')
    if (result.status === 0) {
      return { categoryList: result.data }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  async mounted() {
    this.getSecondCategoryList()
  },
  methods: {
    async getSecondCategoryList() {
      const result = await this.$axios.get('/s_category')
      if (result.status === 0) {
        this.secondCategoryList = result.data
      }
    },
    getCurrentShowCategory(id) {
      let data = []
      this.secondCategoryList.forEach(item => {
        if (id === item.id) {
          data.push(item)
        }
      })
      return data
    },
    enter(id) {
      this.showCategoryWrap = true
      this.currentShowCategory = this.getCurrentShowCategory(id)
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
          width: 486px
          height: 240px
          overflow: hidden
          .swiper-wrapper
            width: 100%
            height: 240px
            img
              width: 100%
              height: 100%
        .banner-login-card
          width: 225px
          height: 240px
          margin-left: 10px
          background-color: #fff
          border: 1px solid #e5e5e5
          text-align: center
        .item
          width: 238px
          height: 165px
          margin: 10px 10px 0 0
          img
            width: 100%
            height: 165px
          &:last-child
            margin: 10px 0 0
        .qr-wrap
          width: 225px
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
.scenes-container
  width: 960px
  margin: 40px auto
  .index-nav-container
    width: 100%
    height: 44px
    line-height: 44px
    color: #fff
    font-size: 14px
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
    ul
      display: flex
      align-items: center
      .title
        font-size: 18px
        margin: 0 10px 0 13px
      .nav-item
        padding: 0 5px
        cursor: pointer
        position: relative
        &.active::after
          position: absolute
          border-left: 5px solid transparent
          border-right: 5px solid transparent
          border-bottom: 7px solid #fff
          content: " "
          display: block
          width: 2px
          height: 0
          top: 37px
          left: 0
          right: 0
          margin: auto
  .quality-area
    background: #fff
    padding: 11px 10px 10px
    border: 1px solid #e5e5e5
    border-top: 0
    border-bottom-left-radius: 4px
    border-bottom-right-radius: 4px
    .quality-card
      display: inline-block
      width: 32.99%
      height: 280px
      padding: 10px
      background-color: #fff
      transition: background-color .5s
      cursor: pointer
      &:hover
        background-color: #f4f4f4
        border-radius: 4px
        transition: background-color .5s
      .quality-img
        height: 162px
        margin-bottom: 12px
        cursor: pointer
        .image
          width: 100%
          height: 100%
          border-radius: 4px
      .poi-info
        .title
          font-size: 16px
          color: #222
          height: 22px
          line-height: 22px
          font-weight: 500
          margin-bottom: 8px
          cursor: pointer
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .tags-wrapper
          font-size: 12px
          color: #999
          height: 20px
          overflow: hidden
          margin-bottom: 5px
          .tag
            float: left
            height: 18px
            line-height: 16px
            text-align: center
            border: 1px solid #d8d8d8
            border-radius: 2px
            margin-right: 10px
            margin-bottom: 5px
            padding:  0 3px
        .price-info
          height: 27px
          overflow: hidden
          margin-bottom: 10px
          .price-symbol
            font-size: 14px
            color: #BE9E4D
            font-weight: 500
          .current-price
            font-size: 0
            margin-right: 6px
            letter-spacing: -.8px
            .price
              font-size: 22px
              color: #BE9E4D
            .current-price-type
              font-size: 12px
              color: #BE9E4D
              letter-spacing: -.6px
</style>
