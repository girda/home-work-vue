<template>
  <div class="inspiration">
    
    <h1>{{msg}}</h1>

  </div>
</template>

<script>

export default {
  name: 'Inspiration',
  components: {
  },
  data () {
    return {
      msg: 'Hello from Inspiration'
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  margin: 100px 0
  text-align: center

</style>
