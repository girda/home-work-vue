<template>
  <div class="player">

      <div class="player__photo">
        <img :src="url">
      </div>

      <div class="player__name">{{name}}</div>

      <div class="player__position">{{position}}</div>

      <div class="player__descr"><slot></slot></div>

  </div>
</template>

<script>
export default {
  name: 'Player',
  props: ['name','position','url'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.player
  max-width: 220px
  text-align: center
  font-size: 16px

  &__photo
    width: 220px
    height: 220px
    margin-bottom: 25px

    background-color: #000000
    border-radius: 50%
    overflow: hidden
    img
      max-width: 100%
      height: 100%
      object-fit: cover

  &__name
    margin-bottom: 8px
    font-size: 18px
    font-weight: 700

  &__position
    margin-bottom: 25px
    color: #555555

</style>
