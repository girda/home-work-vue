<template>
  <div class="social-link">

      <a href="#"><slot></slot></a>

  </div>
</template>

<script>
export default {
  name: 'SocialLink',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.social-link
  display: flex


  & a
    position: relative
    display: flex
    width: 40px
    height: 40px

    background-color: #000000
    border-radius: 50%

    svg
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)

      width: 22px
      height: 22px
      

</style>
