import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/zh-CN'

// 引入自定义主题文件
// import '~/assets/el-theme/element-variables.scss'

// if you using default element theme
// import '../node_modules/element-ui/lib/theme-chalk/index.css'

// 使用自定义主题
import '../theme/index.css'

export default () => {
  Vue.use(Element, { locale })
}
