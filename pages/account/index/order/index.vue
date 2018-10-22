<template>
  <div class="order-wrapper">
    <el-tabs>
      <el-tab-pane label="全部订单">全部订单</el-tab-pane>
      <el-tab-pane label="待付款">待付款</el-tab-pane>
      <el-tab-pane label="待使用">待使用</el-tab-pane>
      <el-tab-pane label="待评价">待评价</el-tab-pane>
      <el-tab-pane label="退款/售后">退款/售后</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .order-wrapper
    background-color: #fff
    border: 1px solid #e5e5e5
    border-radius: 4px
    padding: 20px
</style>
<style lang="sass" rel="stylesheet/sass">
  .order-wrapper
    .el-tabs__item
      font-size: 20px
</style>
