<template>
  <div class="header-search">
    <div class="header-logo">
      <img src="~/static/images/logo.png">
    </div>
    <div class="header-search-module">
      <el-input
        placeholder="搜索商家或地点"
        class="input-with-select">
        <el-button
          slot="append"
          icon="el-icon-search"/>
      </el-input>
      <div class="header-hot-words">
        <a
          href="#"
          class="hot-word">好士牛排</a>
        <a
          href="#"
          class="hot-word">7天连锁酒店</a>
        <a
          href="#"
          class="hot-word">胡桃里音乐酒馆</a>
        <a
          href="#"
          class="hot-word">易佰良品酒店</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch'
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "../../assets/sass/variables.scss"
  .header-search
    width: 960px
    margin: 0 auto
    display: flex
    .header-logo
      padding: 28px 160px 40px 0
      img
        width: 126px
        height: 46px
    .header-search-module
      width: 550px
      padding-top: 30px
      .header-hot-words
        padding: 8px 0 0 12px
        .hot-word
          color: #999999
          margin: 3px 10px 0 0
          &:hover
            color: $primary-color
</style>
<!-- global style -->
<style lang="sass" rel="stylesheet/sass">
  @import "../../assets/sass/variables.scss"
  .header-search
    .el-input-group__append
      background-color: $primary-color
      border-color: $primary-color
      color: #fff
      padding: 0 30px
</style>
