<template>
  <div class="blog">

    <div class="container">

      <news-post title="Our favourite task management app!" date="March 28, 2013" url="static/macbook.png">

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

      </news-post>

      <div class="blog__section">
        <div class="blog__img">
          <img src="static/grunt.png" height="300">
        </div>
      </div>
      
      <div class="blog__section">
      <div class="blog__subtitle">Features of Wunderlist</div>

        <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum commodi delectus porro repellat unde, perspiciatis, adipisci voluptatibus quos. Sit autem nobis distinctio culpa. Inventore iusto, possimus repellat, nemo laudantium a.</p>

        <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

      </div>
      
      <div class="blog__section">
        <div class="blog__img">
          <img src="static/comp.png" height="300">
        </div>
      </div>
      
      <div class="blog__section">
        <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum commodi delectus porro repellat unde, perspiciatis, adipisci voluptatibus quos. Sit autem nobis distinctio culpa. Inventore iusto, possimus repellat, nemo laudantium a.</p>
      </div>

      <share-link/>

    </div>

    
    
  </div>
</template>

<script>
import NewsPost from '@/components/NewsPost'
import ShareLink from '@/components/ShareLink'

export default {
  name: 'Blog',
  components: {
    NewsPost,
    ShareLink,
  },
  data () {
    return {
      msg: 'Hello from Blog'
    }
  }
}
</script>

<style lang="sass" scoped>
.blog
  margin-top: 90px

  &__section
    margin-bottom: 45px

  &__img
    display: flex
    justify-content: center

  &__subtitle
    font-size: 30px
    margin-bottom: 20px

  &__text
    margin: 0 0 20pxs

</style>
