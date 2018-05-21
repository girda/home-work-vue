<template>
  <div class="main-header">

    <main-nav/>

  </div>
</template>

<script>
import MainNav from '@/components/MainNav'


export default {
  name: 'MainHeader',
  components: {
    MainNav,
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.main-header
  background-color: black

</style>
