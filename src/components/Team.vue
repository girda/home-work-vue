<template>
  <div class="team">
    
    <div class="container">
      <div class="team__title">{{title}}</div>

      <div class="team__content">
        
        <players />
        
      </div>
    </div>
    


  </div>
</template>

<script>
import Players from '@/components/Players'

export default {
  name: 'Team',
  components: {
    Players,
  },
  data () {
    return {
      title: 'Meet Our Team!'
    }
  }
}
</script>

<style lang="sass" scoped>
.team
  margin-bottom: 30px

  &__title
    font-family: NexaBold
    font-size: 48px
    text-align: center
    margin-bottom: 45px

</style>
