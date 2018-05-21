<template>
  <div class="players">

    <div class="players__item">
      <player name="Kimberly Thompson" position="Founder & CEO" url="static/avatar.jpg">
        Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.
      </player>
    </div>

    <div class="players__item">
      <player name="Rico Masi" position="Code Master" url="static/avatar.jpg">
        There’s no challege Rico can’t tame! Making sure everything is safe and secure on the back end, you can say that he’s the heart of this team. 
      </player>
    </div>

    <div class="players__item">
      <player name="Uku Mason" position="Marketing Expert" url="static/avatar.jpg">
        Not your average marketer. Uku manages everything from, marketing and finance to customer relation.
      </player>
    </div>

    <div class="players__item">
      <player name="Blaz Robar" position="Design Guru" url="static/avatar.jpg">
        A Highly experienced UI/UX designer, Blaz brings our ideas to life with his beautiful visual designs.
      </player>
    </div>

    <div class="players__item">
      <player name="Jamie Adams" position="Assistant" url="static/avatar.jpg">
        Don’t let the picture fool you. Jamie is the glue that holds our team together! Managing everthing from recruitments, social gatherings, and everyday operations.
      </player>
    </div>
    
  </div>
</template>

<script>
import Player from '@/components/Player'

export default {
  name: 'Players',
  components: {
    Player,
  },
  data () {
    return {
      msg: 'Hello from Players'
    }
  }
}
</script>

<style lang="sass" scoped>
.players
  display: flex
  justify-content: center
  flex-wrap: wrap

  &__item
    margin: 0 40px 65px

</style>
