<template>
  <div id="app">

    <main-header/>

    <router-view/>

    <main-footer/>

  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
  },
}
</script>

<style lang="sass">
body 
  margin: 0
  font-family: 'Arial', sans-serif
  font-size: 16px
  line-height: 1.2
  color: #111111

.container
  width: 940px
  margin: 0 auto

.header

  &__item
    display: flex
    justify-content: space-between

</style>
