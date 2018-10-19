<template>
  <div class="account-wrapper">
    <div>左边导航</div>
    <div>
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  mounted() {
    if (this.$route.path === '/account') {
      this.$router.replace('/account/userinfo')
    }
  }
}
</script>

<style scoped>
</style>
<style lang="sass" rel="stylesheet/sass">
  .account
    .header-search
      padding-bottom: 0
</style>
