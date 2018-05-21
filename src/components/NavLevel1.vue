<template>
  <nav class="nav-level-1">

    <router-link class="nav-level-1__link" to="News">News</router-link>

    <router-link class="nav-level-1__link" to="Inspiration">Inspiration</router-link>

    <router-link class="nav-level-1__link" to="Tutorials">Tutorials</router-link>

    <router-link class="nav-level-1__link" to="Wordpress">Wordpress</router-link>
      
  </nav>
</template>

<script>
export default {
  name: 'NavLevel1',
  data () {
    return {
      msg: '' 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.nav-level-1
  display: flex
  align-items: center

  &__link
    margin-left: 20px
    font-size: 16px
    color: #cccccc
    text-decoration: none
    text-transform: uppercase
    &:hover, &.router-link-active
      color: white
    

</style>
