<template>
  <div class="tutorials">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Tutorials',
  components: {
  },
  data () {
    return {
      msg: 'Hello from Tutorials'
    }
  }
}
</script>


<style lang="sass" scoped>
h1
  margin: 100px 0
  text-align: center

</style>
