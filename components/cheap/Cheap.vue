<template>
  <div class="cheap-wrapper">
    <div class="index-nav-conatiner">
      <ul>
        <li class="nav-item title">狠优惠</li>
        <li
          v-for="(tab, index) in tabs"
          :key="tab.id"
          :class="{active: index === currentActiveIndex}"
          class="nav-item"
          @mouseenter="enter(tab.tab, index)">{{ tab.text }}</li>
      </ul>
    </div>
    <div class="cheap-area">
      <a
        v-for="item in cheaps"
        :key="item.id"
        class="link cheap-card">
        <div class="cheap-img">
          <img
            :src="item.img_url"
            class="image">
        </div>
        <div class="poi-info">
          <div class="title">{{ item.title }}</div>
          <div
            class="sub_title">{{ item.sub_title }}</div>
          <div
            class="tags-wrapper">
            <div
              v-for="tag in item.tags"
              :key="tag"
              class="tag">{{ tag }}</div>
          </div>  
          <div class="price-info">
            <span class="current-price-wrapper">
              <span class="price-symbol">¥</span>
              <span class="current-price">
                <span class="price">{{ item.current_price }}</span>
              </span>
              <span class="old-price">
                <span class="price">{{ item.old_price }}</span>
              </span>
            </span>
            <span class="sale-num">{{ item.bottom_info }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Scenes',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    cheaps: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentActiveIndex: 0
    }
  },
  methods: {
    enter(tab, index) {
      if (this.currentActiveIndex === index) return
      this.currentActiveIndex = index
      this.$emit('enter', tab)
    }
  }
}
</script>
<style lang="sass" scoped>
.cheap-wrapper
  width: 960px
  margin: 40px auto 0
  .index-nav-conatiner
    height: 44px
    width: 100%
    color: #fff
    font-size: 14px
    line-height: 44px
    border-top-right-radius: 4px
    border-top-left-radius: 4px
    background-color: rgb(190, 164, 116)
    background-image: linear-gradient(to right, rgb(255, 113, 74) 2%, rgb(252, 66, 66) 97%)
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
  .cheap-area
    background: #fff
    padding: 11px 10px 10px
    border: 1px solid #e5e5e5
    border-top: 0
    border-bottom-left-radius: 4px
    border-bottom-right-radius: 4px
    .cheap-card
        display: inline-block
        width: 230px
        height: 270px
        padding: 10px
        background-color: #fff
        transition: background-color .5s
        cursor: pointer
        &:hover
          background-color: #f4f4f4
          border-radius: 4px
          transition: background-color .5s
        .cheap-img
          height: 120px
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
          .sub_title
            font-size: 12px
            color: #999999
            line-height: 18px
            height: 18px
            margin-bottom: 7px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
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
                color: #F60
              .current-price-type
                font-size: 12px
                color: #BE9E4D
                letter-spacing: -.6px
            .old-price
              color: #999
              font-size: 12px
              text-decoration: line-through   
            .sale-num
              float: right
              margin-top: 10px
</style>
