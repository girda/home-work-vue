<template>
  <div class="wordpress">

    <h1>{{msg}}</h1>
    
  </div>
</template>

<script>

export default {
  name: 'Wordpress',
  components: {
  },
  data () {
    return {
      msg: 'Hello from Wordpress'
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  margin: 100px 0
  text-align: center

</style>
