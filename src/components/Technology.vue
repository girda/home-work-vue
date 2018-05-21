<template>
  <div class="technology">
    
    <div class="container">


      <news-post title="Our favourite task management app!" date="March 28, 2013" url="static/grunt.png" btn="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</news-post>

      <news-post title="Our favourite task management app!" date="March 28, 2013" url="static/macbook.png" btn="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</news-post>

      <news-post title="Our favourite task management app!" date="March 28, 2013" url="static/comp.png" btn="true" mod="border-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</news-post>

      <div class="technology__pagination">
        <pagination/>
      </div>

    </div>
    

  </div>
</template>

<script>
import NewsPost from '@/components/NewsPost'
import Pagination from '@/components/Pagination'

export default {
  name: 'Technology',
  data () {
    return {
      msg: 'Technology'
    }
  },
  components: {
    Pagination,
    NewsPost,
  }
}
</script>


<style lang="sass" scoped>
.technology
  margin-top: 90px

  news-post:last-of-type
    background-color: black

  &__pagination
    margin-bottom: 90px
</style>
