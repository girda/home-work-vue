<template>
  <nav class="nav-level-1">

    <router-link class="nav-level-1__link" to="Blog">Blog</router-link>

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
<style lang="sass">
.nav-level-1
  display: flex
  align-items: center

  &__link
    margin-left: 20px
    font-family: NexaBold
    font-size: 16px
    font-weight: 700
    color: #cccccc
    text-decoration: none
    text-transform: uppercase
    &:hover, &.router-link-active
      color: white
    

</style>
