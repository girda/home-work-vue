<template>
  <div class="nav-footer">
    
    <ul class="nav-footer__list">
      <li class="nav-footer__item" v-for="key in titles">{{key.title}}</li>
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  data () {
    return {
      title: '',
      titles: [
        { title: 'Home' },
        { title: 'About' },
        { title: 'Archive' },
        { title: 'Contact' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.nav-footer

  &__list
    display: flex
    margin: 0
    padding: 0
    
    list-style: none

  &__item
    margin-right: 30px
    font-size: 14px
    font-weight: 600
    color: #555555
    cursor: pointer
    &:hover
      text-decoration: underline


</style>
