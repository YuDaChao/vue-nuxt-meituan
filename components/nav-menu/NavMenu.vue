<template>
  <div class="nav-menu">
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
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    categoryList: {
      type: Array,
      default: function() {
        return []
      }
    },
    currentShowCategory: {
      type: Array,
      default: function() {
        return []
      }
    },
    showCategoryWrap: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    enter(id) {
      this.$emit('enter', id)
    },
    enterWrap() {
      this.$emit('enterWrap')
    },
    leave() {
      this.$emit('leave')
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../../assets/sass/variables.scss"
  .nav-menu
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
</style>
