<template>
  <ul class="pagination">
    <button href="" class="pagination__btn pagination__btn--prev">
      <img src="../assets/arrow.svg" width="12" height="12">
    </button>
    <li class="pagination__item" v-for="key in numbers">
      <router-link class="pagination__link" to="">
        {{key.number}}
      </router-link>
    </li>
    <button href="" class="pagination__btn pagination__btn--next">
      <img src="../assets/arrow.svg" width="12" height="12">
    </button>
  </ul>
</template>

<script>

export default {
  name: 'Pagination',
  data () {
    return {
      numbers: [
        {number: '1'},
        {number: '2'},
        {number: '3'},
        {number: '4'},
        {number: '5'},
        {number: '6'},
        {number: '...'},
      ]
    }
  },
  components: {
  }
}
</script>


<style lang="sass" scoped>
.pagination
  display: flex
  justify-content: center
  align-items: center
  margin: 0
  padding: 0

  list-style: none

  &__item
    margin: 0 10px

  &__link
    text-decoration: none
    color: black
    letter-spacing: 2px

  &__btn
    display: flex
    justify-content: center
    align-items: center
    width: 35px
    height: 35px

    background-color: #000000
    border: none

    &--prev
      margin-right: 10px
    &--next
      transform: rotate(180deg)
      margin-left: 10px

</style>
