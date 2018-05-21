<template>
  <div class="blog">

    <nav>
        <nav-level2/>
    </nav>

    <div class="container">
      <!-- begin full-post -->
      <news-post class="full-post" title="Our favourite task management app!" date="March 28, 2013" url="static/macbook.png">

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

        <div class="full-post__img">
          <img src="static/grunt.png" height="300">
        </div>

        <div class="full-post__subtitle">Features of Wunderlist</div>

        <p class="full-post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum commodi delectus porro repellat unde, perspiciatis, adipisci voluptatibus quos. Sit autem nobis distinctio culpa. Inventore iusto, possimus repellat, nemo laudantium a.</p>

        <p class="full-post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>

        <div class="full-post__img">
          <img src="static/comp.png" height="300">
        </div>

        <p class="blog__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum commodi delectus porro repellat unde, perspiciatis, adipisci voluptatibus quos. Sit autem nobis distinctio culpa. Inventore iusto, possimus repellat, nemo laudantium a.</p>
        
        <!-- begin social -->
        <div class="full-post__social social">

          <div class="social__title">Share this article...</div>
            
          <div class="social__wrapper">  
            <div class="social__item">
              <share-link num="1000">
                <svg fill="#000000" viewBox="0 0 49 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="m49.507535,5.482637c-1.811,0.805 -3.76,1.348 -5.805,1.591c2.088,-1.25 3.689,-3.23 4.444,-5.592c-1.953,1.159 -4.115,2 -6.418,2.454c-1.843,-1.964 -4.47,-3.192 -7.377,-3.192c-5.581,0 -10.106,4.525 -10.106,10.107c0,0.791 0.089,1.562 0.262,2.303c-8.4,-0.422 -15.848,-4.445 -20.833,-10.56c-0.87,1.492 -1.368,3.228 -1.368,5.082c0,3.506 1.784,6.6 4.496,8.412c-1.656,-0.053 -3.215,-0.508 -4.578,-1.265c-0.001,0.042 -0.001,0.085 -0.001,0.128c0,4.896 3.484,8.98 8.108,9.91c-0.848,0.23 -1.741,0.354 -2.663,0.354c-0.652,0 -1.285,-0.063 -1.902,-0.182c1.287,4.015 5.019,6.938 9.441,7.019c-3.459,2.711 -7.816,4.327 -12.552,4.327c-0.815,0 -1.62,-0.048 -2.411,-0.142c4.474,2.869 9.786,4.541 15.493,4.541c18.591,0 28.756,-15.4 28.756,-28.756c0,-0.438 -0.009,-0.875 -0.028,-1.309c1.974,-1.422 3.688,-3.203 5.042,-5.23z"/>
                </svg>
              </share-link>
            </div>

            <div class="social__item">
              <share-link num="364">
                <svg fill="#000000" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path d="M191.844,511.5V288.375h-68.313V188h69.875v-83.063c0,0,3.188-104.625,92.813-105.438h99.75V98h-61.875   c0,0-26.125,0-26.125,29.438c0,29.375,0,62.313,0,62.313h89.5l-10.75,100.313h-77.188V511.5H191.844z"/>
                </svg>
              </share-link>
            </div>

            <div class="social__item">
              <share-link num="795">
                <svg fill="#000000" version="1.1" viewBox="0 0 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path d="M30.374,4.622c-13.586,0-20.437,9.74-20.437,17.864c0,4.918,1.862,9.293,5.855,10.922c0.655,0.27,1.242,0.01,1.432-0.715  c0.132-0.5,0.445-1.766,0.584-2.295c0.191-0.717,0.117-0.967-0.412-1.594c-1.151-1.357-1.888-3.115-1.888-5.607  c0-7.226,5.407-13.695,14.079-13.695c7.679,0,11.898,4.692,11.898,10.957c0,8.246-3.649,15.205-9.065,15.205  c-2.992,0-5.23-2.473-4.514-5.508c0.859-3.623,2.524-7.531,2.524-10.148c0-2.34-1.257-4.292-3.856-4.292  c-3.058,0-5.515,3.164-5.515,7.401c0,2.699,0.912,4.525,0.912,4.525s-3.129,13.26-3.678,15.582  c-1.092,4.625-0.164,10.293-0.085,10.865c0.046,0.34,0.482,0.422,0.68,0.166c0.281-0.369,3.925-4.865,5.162-9.359  c0.351-1.271,2.011-7.859,2.011-7.859c0.994,1.896,3.898,3.562,6.986,3.562c9.191,0,15.428-8.379,15.428-19.595  C48.476,12.521,41.292,4.622,30.374,4.622z"/>
                </svg>
              </share-link>
            </div>
          </div>

        </div>
        <!-- end social -->

      </news-post>
      <!-- end full-post -->

      <!-- begin comments -->
        <div class="comments">

          <div class="comments__title">Comments</div>
          
          <div class="comments__item">
            <comment url="static/avatar.jpg" name="Uku Mason" date="March 2, 2013  —  12:50 AM">I absolutely love the Wunderlist from 6Wunderkinder!! It keeps me organized and makes my life easier. I’m looking to get a HTC phone and wanted to know whether they have an Adroid version out yet?</comment>
          </div>
          
          <div class="comments__item">
            <comment url="static/avatar.jpg" name="Designer First" date="March 3, 2013  —  11:45 AM" mod="reply">I believe they recently released an Android version. You should check out the 6Wunderkinder page. I remember seeing it there.</comment>
          </div>
          
          <div class="comments__item">
            <comment url="static/avatar.jpg" name="Ro Kanth" date="March 28, 2013  —  22:50 AM">This is the greatest app ever! So simple and so beautiful!! I’m so glad that they have cloud sync for this app, makes it easy manage tasks over multiple devices.</comment>
          </div>

        </div>
      <!-- end comments -->

      <div class="blog__form">
        <form-comments/>
      </div>
        
    </div>
    
  </div>
</template>

<script>
import NavLevel2 from '@/components/NavLevel2'
import NewsPost from '@/components/NewsPost'
import ShareLink from '@/components/ShareLink'
import Comment from '@/components/Comment'
import FormComments from '@/components/FormComments'

export default {
  name: 'Blog',
  components: {
    NavLevel2,
    NewsPost,
    ShareLink,
    Comment,
    FormComments,
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

  &__form
    margin-bottom: 100px

.full-post
  margin-top: 90px

  &__img
    display: flex
    justify-content: center
    margin: 40px 0

  &__subtitle
    font-family: proximanova-semibold
    font-size: 30px
    margin-bottom: 20px

  &__text
    margin-bottom: 25px

  &__social
    margin-top: 70px

.social

  &__title
    font-size: 16px
    font-weight: 700
    text-align: center

  &__wrapper
    display: flex
    justify-content: center

  &__item
    margin-right: 16px

.comments

  &__title
    margin-bottom: 45px
    font-family: NexaBold
    font-size: 32px

  &__item
    margin-bottom: 45px

</style>
