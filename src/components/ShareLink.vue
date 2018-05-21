<template>
  <div>

    <a class="share-link" href="#">
    	<slot></slot>
    	<span class="share-link__num">{{num}}</span>
    </a>

  </div>
</template>

<script>
export default {
  name: 'ShareLink',
  props: ['num'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.share-link
	display: flex
	align-items: center
	text-decoration: none
	color: #ffffff
	svg
		width: 21px
		height: 21px

		margin-right: 10px

	&__num
		position: relative
		height: 17px
		min-width: 38px
		padding: 0 5px

		font-size: 11px
		line-height: 17px
		text-align: center

		background-color: #000000
		border-radius: 3px

		&::before
			content: ''
			position: absolute
			top: 50%
			left: -6px
			width: 0
			height: 0

			transform: translateY(-50%)

			border-top: 4px solid transparent
			border-right: 8px solid black
			border-bottom: 4px solid transparent



</style>
