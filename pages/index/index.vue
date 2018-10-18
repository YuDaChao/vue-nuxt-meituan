<template>
  <section class="container">
    <div class="banner-wrap">
      <div class="banner-content">
        <nav-menu
          :category-list="categoryList"
          :current-show-category="currentShowCategory"
          :show-category-wrap="showCategoryWrap"
          @enter="enter"
          @enter-wrap="enterWrap"
          @leave="leave"
        />
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
import UserCard from '../../components/user-card/UserCard'
import NavMenu from '../../components/nav-menu/NavMenu'

export default {
  components: {
    UserCard,
    NavMenu
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
@import "../../assets/sass/variables.scss"
.banner-wrap
  width: 960px
  margin: 0 auto
  position: relative
  .banner-content
    display: flex
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
