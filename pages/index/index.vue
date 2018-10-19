<template>
  <section class="container">
    <div class="banner-wrap">
      <div class="banner-content">
        <nav-menu
          :category-list="categoryList"
          :current-show-category="currentShowCategory"
          :show-category-wrap="showCategoryWrap"
          @enter="enter"
          @enterWrap="enterWrap"
          @leave="leave"
        />
        <div class="header-nav-list">
          <div class="category-nav-content">
            <div class="category-nav-item">美团外卖</div>
            <div class="category-nav-item">猫眼电影</div>
            <div class="category-nav-item">美团酒店</div>
            <div class="category-nav-item">民宿 / 公寓</div>
            <div class="category-nav-item">商家入住</div>
            <div class="category-nav-item">美团公益</div>
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
    <scenes
      :tabs="tabs"
      :scenes="currentScenes"
      @enter="scenesTabEnter"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserCard from '../../components/user-card/UserCard'
import NavMenu from '../../components/nav-menu/NavMenu'
import Scenes from '../../components/scenes/Scenes'

export default {
  components: {
    UserCard,
    NavMenu,
    Scenes
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'index',
          name: 'index',
          content: '这是美团网-首页'
        }
      ]
    }
  },
  data() {
    return {
      title: '美团网-首页',
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
      userInfo: state => state.user.userInfo,
      scenes: state => state.scenes,
      tabs: state => state.tabs,
      currentTab: state => state.currentTab
    }),
    currentScenes() {
      return this.scenes[this.currentTab] || []
    }
  },
  async mounted() {
    this.getSecondCategoryList()
    this.getScenes('all')
  },
  methods: {
    ...mapActions(['getScenes']),
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
    },
    scenesTabEnter(tab) {
      this.getScenes(tab)
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
    position: relative
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
    .header-nav-list
      position: absolute
      top: -42px
      width: 960px
      margin: 0 auto
      padding-bottom: 10px
      .category-nav-content
        display: flex
        align-items: center
        height: 32px
        margin-left: 266px
        .category-nav-item
          color: #222
          font-weight: 700
          font-size: 16px
          margin: 0 20px
          cursor: pointer
          &:nth-child(1):hover
            color: #FBC703
          &:nth-child(2):hover
            color: #ed1e24
          &:nth-child(3):hover
            color: $primary-color
          &:nth-child(4):hover
            color: #FBC703
          &:nth-child(5):hover
            color: #ed1e24
          &:nth-child(6):hover
            color: $primary-color
</style>
