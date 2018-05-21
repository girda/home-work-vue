<template>
  <div class="about">
    
    <div class="about__preview container">
      <div class="about__title">What We Are All About</div>
      <div class="about__descr">
        <p>It’s not always easy to filter out noise and purely focus on the content. Too many blogs and news sites are filled with colourful and distracting advertisement left right and centre. This is where we do things differently! Rather than just focusing purely and generating revenue, we focus on great user experience.</p>

        <p>You will notice that our news articles are content focused and free of any distractions. On top of that, we deliver content revolving design on a daily basis. Offering you insightful tutorials, techniques, design inspirations, mobile app development, coding, unique advertisements, and freebies.</p>

        <p>Our focus is and forever will be to bring high quality resources to lean from and to be inspired. Visit us daily for new design related articles!</p>
      </div>
    </div>

    <team />

  </div>
</template>

<script>
import Team from '@/components/Team'

export default {
  name: 'About',
  components: {
    Team,
  },
  data () {
    return {
      msg: 'Content About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.about
  margin-top: 90px

  &__preview
    padding-bottom: 50px
    margin-bottom: 50px
    border-bottom: 1px solid #e0e0e0

  &__title
    font-family: NexaBold
    font-size: 48px
    text-align: center
    margin-bottom: 45px

  &__descr p
    font-size: 16px
    margin: 0 0 30px
    &:last-child
      margin-bottom: 0

</style>
