<template>
  <div class="home">

    <about/>

  </div>
</template>

<script>
import About from '@/components/About'

export default {
  name: 'Home',
  components: {
    About,
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style lang="sass" scoped>
h1
  margin: 0
  text-align: center

</style>
