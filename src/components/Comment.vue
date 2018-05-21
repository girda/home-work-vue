<template>
  <div class="comment" :data-mod="mod">
    
    <div class="comment__icon">
      <img :src="url">
    </div>

    <div class="comment__wrapper">
      
      <div class="comment__name">{{name}}</div>

      <div class="comment__date">{{date}}</div>

      <div class="comment__descr"><slot></slot></div>

      <a href="#" class="comment__btn">
        <span class="comment__btn-icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="17" height="13" viewBox="0 0 17 13">
            <image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAMAAAB4p3UoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEUAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAAACvHzj+AAAAD3RSTlMAIEDvYHCfv48wrxDPgN++fqgHAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE9JREFUCNddj0EOgDAIBEGrUKHy/99qSUrSnQvJZAkLUcIEHCeIFrGLK8DcMRHtu5g8VisLN8iUytQY4v/QOp63rL3B0MdcsbPJqlB/df4A07QETRoeuYMAAAAASUVORK5CYII=" width="17" height="13"/>
          </svg>
        </span>
        <span class="comment__btn-text">Click to Reply</span>
      </a>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['url', 'name', 'date', 'mod'],
  data () {
    return {
    }
  }
}
</script>


<style lang="sass" scoped>
.comment
  position: relative
  padding-top: 15px
  &[mod*=reply]
    margin-left: 95px

  &__icon
    position: absolute
    top: 0
    left: 0px
    width: 70px
    height: 70px

    background-color: #000000
    border-radius: 50%
    overflow: hidden
    img
      max-width: 100%
      height: 100%
      object-fit: cover

  &__wrapper
    display: flex
    flex-direction: column
    padding-left: 95px

  &__name
    margin-bottom: 12px

    font-size: 24px
    font-weight: 700

  &__date
    margin-bottom: 15px

    font-size: 14px
    color: #555555

  &__descr
    line-height: 1.4
    margin-bottom: 5px

  &__btn
    display: flex
    font-size: 16px
    color: #555555
    text-decoration: none

  &__btn-icon
    margin-right: 5px
    

</style>
