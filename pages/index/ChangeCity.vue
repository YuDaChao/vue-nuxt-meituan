<template>
  <div class="change-city">
    <div class="op-area">
      <el-form :inline="true">
        <el-form-item
          label="按省份选择:"
          style="margin-right: 50px">
          <el-select
            :focus="handleSelectFocus"
            placeholder="省份">
            <div>asasa</div>
          </el-select>
          <el-select placeholder="城市:">
            <el-option
              label="区域一"
              value="shanghai"/>
            <el-option
              label="区域二"
              value="beijing"/>
          </el-select>
        </el-form-item>
        <el-form-item label="直接搜索:">
          <el-input placeholder="请输入城市名称"/>
        </el-form-item>
      </el-form>
    </div>
    <div class="citylist">
      <h3 class="l-attr">热门城市:</h3>
      <p class="r-info">
        <a
          href="#"
          class="link city">北京</a>
        <a
          href="#"
          class="link city">上海</a>
        <a
          href="#"
          class="link city">深圳</a>
        <a
          href="#"
          class="link city">广州</a>
        <a
          href="#"
          class="link city">天津</a>
        <a
          href="#"
          class="link city">西安</a>
        <a
          href="#"
          class="link city">重庆</a>
        <a
          href="#"
          class="link city">杭州</a>
        <a
          href="#"
          class="link city">武汉</a>
        <a
          href="#"
          class="link city">成都</a>
      </p>
    </div>
    <div class="citylist">
      <h3 class="l-attr">最近访问:</h3>
      <p class="r-info">
        <a
          href="#"
          class="link city">云南</a>
      </p>
    </div>
    <div class="alphabet">
      <h3 class="l-attr">按拼音首字母选择:</h3>
      <p class="r-info">
        <a
          v-for="label in cityLabelList"
          :key="label"
          :href="`#city-${label}`"
          class="letter">{{ label }}</a>
      </p>
    </div>
    <div class="alphabet-city-area">
      <div
        v-for="(city, index) in cityList"
        :id="`city-${city.label}`"
        :key="index"
        class="city-area">
        <div class="city-label">{{ city.label }}</div>
        <span class="cities">
          <a
            v-for="item in city.list"
            :key="item.id"
            href="#"
            class="link city">{{ item.city }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'change-city',
          name: 'change-city',
          content: '这是美团网-切换城市'
        }
      ]
    }
  },
  data() {
    return {
      title: '美团网-切换城市',
      cityList: []
    }
  },
  async asyncData({ app }) {
    const result = await app.$axios.get('/cities')
    if (result.status === 0) {
      return { cityList: result.data }
    }
  },
  computed: {
    cityLabelList() {
      return this.cityList.map(item => item.label)
    }
  },
  methods: {
    handleSelectFocus() {
      console.log('--')
    }
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/sass/variables"
.change-city
  width: 960px
  margin: 20px auto 0
  background-color: #fff
  border: 1px solid #e5e5e5
  border-radius: 5px
  min-height: 1000px
  padding: 20px
  .op-area
    border-bottom: 1px solid #e5e5e5
  .citylist
    padding: 30px 0
    border-bottom: 1px solid #e5e5e5
    .l-attr
      font-size: 16px
      color: #333
      font-weight: 500
      display: inline-block
      vertical-align: top
    .r-info
      display: inline-block
      vertical-align: top
      margin-top: 2px
      .city
        font-size: 14px
        margin: 0 20px
        color: #666
  .alphabet
    padding: 30px 0
    .l-attr
      font-size: 16px
      color: #333
      font-weight: 500
      display: inline-block
      vertical-align: top
    .r-info
      display: inline-block
      vertical-align: top
      margin-top: 2px
      .letter
        display: inline-block
        font-size: 15px
        color: #666666
        width: 25px
        height: 25px
        border-radius: 50%
        margin: 0 5px
        cursor: pointer
        text-align: center
        line-height: 25px
        &:hover
          background-color: #F8F8F8
  .alphabet-city-area
    .city-area
      padding: 13px 30px 13px 10px
      border-radius: 10px
      &:hover
        background-color: #F8F8F8
      .city-label
        width: 40px
        height: 40px
        border-radius: 50%
        color: #fff
        display: inline-block
        text-align: center
        line-height: 40px
        font-size: 16px
        background-color: #13D1BE
        box-shadow: 0 4px 5px 0 rgba(39,178,164,.22)
        vertical-align: top
      .cities
        display: inline-block
        max-width: 830px
        .city
          margin: 10px 20px
          color: #666666
          display: inline-block
          font-size: 14px
          &:hover
            color: $primary-color
</style>
<style lang="sass">
  .change-city
    .el-form-item__label
      font-size: 16px
      color: #333
      font-weight: 500
    .el-form-item
      margin-bottom: 30px
</style>
