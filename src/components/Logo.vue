<template>
  <div class="logo">
    <router-link class="logo__item" to="/">
      <img src="../assets/logo.png" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.logo

  &__item
      font-size: 20px
      color: white
      text-decoration: none

</style>
