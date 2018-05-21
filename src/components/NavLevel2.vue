<template>
  <div class="nav-leve-2">
    <div class="container">
      <div class="nav-leve-2__layout">

        <router-link class="nav-leve-2__link" to="">
          <span class="js-link" v-on:click="test">Bussines</span>
        </router-link>

        <router-link class="nav-leve-2__link" to="">
          <span class="js-link" v-on:click="test">Mobile</span>
        </router-link>

        <router-link class="nav-leve-2__link" to="">
          <span class="js-link" v-on:click="test">Social Media</span>
        </router-link>

        <router-link class="nav-leve-2__link is-active" to="">
          <span class="js-link" v-on:click="test">Technology</span>
        </router-link>

      </div>
    </div>  
  </div>
</template>

<script>
let links = document.querySelectorAll('.js-link');

export default {
  name: 'NavLevel2',
  data () {
    return {
      msg: 'NavLevel2'
    }
  },
  methods: {
    test: function (event) {

      console.log(event.target)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.nav-leve-2
  padding: 20px 0
  background-color: #f8f8f8
  border-bottom: 1px solid #d4d4d4

  &__layout
    display: flex
    justify-content: flex-end

  &__link
    position: relative
    margin-left: 25px 
    font-size: 14px
    color: #555555
    text-decoration: none
    &.is-active
      &::after
        position: absolute
        bottom: -21px
        left: 0
        right: 0

        content: ''
        height: 1px

        background-color: #636363



</style>
