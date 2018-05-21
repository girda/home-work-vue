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
@import sass/app

@font-face
  font-family: NexaBold
  src: url("fonts/NexaBold.woff") format("woff")
  font-weight: normal
  font-style: normal
  font-display: swap

@font-face
  font-family: proximanova-regular
  src: url("fonts/proximanova-regular.woff") format("woff")
  font-weight: normal
  font-style: normal
  font-display: swap

@font-face
  font-family: proximanova-semibold
  src: url("fonts/proximanova-semibold.woff") format("woff")
  font-weight: normal
  font-style: normal
  font-display: swap

body 
  margin: 0
  font-family: 'proximanova-regular' , sans-serif
  font-weight: 400
  font-size: 16px
  line-height: 1.2
  color: #111111

h1,h2,h3,p,div
  margin: 0
  padding: 0

.container
  width: 940px
  margin: 0 auto


.header

  &__item
    display: flex
    justify-content: space-between

</style>
