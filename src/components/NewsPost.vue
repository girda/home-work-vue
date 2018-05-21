<template>
  <section class="news-post" :data-mod="mod">
    
    <div class="container">
      
      <div class="news-post__title">{{title}}</div>

      <div class="news-post__date">Posted on {{date}}</div>

      <div class="news-post__img">
        <img :src="url">
      </div>

      <div class="news-post__descr"><slot></slot></div>

      <router-link v-if="btn" class="news-post__btn" to="/Blog">
        <span class="news-post__btn-icon">
          <img src="../assets/arrow2.svg">
        </span>
        <span>Read More</span>
      </router-link>

    </div>
    

  </section>
</template>

<script>
export default {
  name: 'NewsPost',
  props: ['title', 'date', 'url','btn', 'mod'],
  data () {
    return {
      msg: 'NewsPost',
    }
  },
  components: {

  }
}
</script>


<style lang="sass" scoped>
.news-post
  margin-bottom: 45px
  padding-bottom: 40px
  border-bottom: 1px solid #d4d4d4
  &[data-mod*=border-none]
    border: none

  &__title
    max-width: 840px
    margin: 0 auto 30px
    
    font-size: 50px
    text-transform: capitalize
    text-align: center

  &__date
    margin-bottom: 50px
    font-size: 12px
    color: #8f8f8f
    text-align: center

  &__img
    display: flex
    justify-content: center
    align-items: center
    margin-bottom: 45px

    img
      width: auto
      height: auto
      max-width: 100%
      max-height: 400px
      object-fit: cover

  &__descr
    line-height: 1.6
    p
      margin-bottom: 25px

  &__btn
    display: flex
    align-items: center
    text-decoration: none
    color: black

    margin-top: 40px

  &__btn-icon
    display: flex
    justify-content: center
    align-items: center
    width: 28px
    height: 28px
    margin-right: 14px

    border: 2px solid black
    border-radius: 50%
    img
      width: 20px
      height: 20px
      transform: rotate(180deg)

</style>
