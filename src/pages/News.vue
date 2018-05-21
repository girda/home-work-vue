<template>
  <div class="news">

    <nav>
        <nav-level2/>
    </nav>

    <technology/>

  </div>
</template>

<script>
import NavLevel2 from '@/components/NavLevel2'
import Technology from '@/components/Technology'

export default {
  name: 'News',
  data () {
    return {
      msg: 'News'
    }
  },
  components: {
    NavLevel2,
    Technology,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h1
    margin: 0

</style>
