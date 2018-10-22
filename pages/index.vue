<template>
  <section class="container">
    <mt-header/>
    <nuxt-child />
  </section>
</template>

<script>
import MtHeader from '../components/header/Header'

export default {
  components: {
    MtHeader
  }
}
</script>

<style scoped lang="sass">
</style>
<style lang="sass">
  .container
    .header-wrap
      padding-bottom: 42px
</style>
