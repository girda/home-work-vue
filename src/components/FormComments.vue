<template>
  <div class="form-comments">
    <div class="form-comments__title">Leave a Comment</div>
	
	<div class="form-comments__wrapper">
		<label for="name" class="form-comments__label">
	    	<span class="form-comments__label-name">Name*</span>
	    	<input type="text" name="name" id="name" class="form-comments__input" required>
	    </label>

	    <label for="email" class="form-comments__label">
	    	<span class="form-comments__label-name">Email*</span>
	    	<input type="text" name="email" id="email" class="form-comments__input" required>
	    </label>

	    <label for="message" class="form-comments__label">
	    	<span class="form-comments__label-name">Your Comment*</span>
	    	<textarea name="message" id="message" class="form-comments__message"></textarea>
	    </label>
	</div>
	    
  </div>
</template>

<script>
export default {
  name: 'FormComments',
  data () {
    return {
    }
  }
}
</script>


<style lang="sass" scoped>
.form-comments

	&__title
		margin-bottom: 45px

		font-size: 32px
		font-weight: 700

	&__wrapper
		display: flex
		flex-direction: column

	&__label
		display: flex
		flex-direction: column
		margin-bottom: 20px

	&__label-name
		margin-bottom: 10px

		font-size: 18px
		font-weight: 700

	&__input
		width: 285px
		height: 35px
		padding: 0 15px

		border: 2px solid #ebebeb
		border-radius: 4px

	&__message
		width: 635px
		height: 135px
		padding: 15px

		border: 2px solid #ebebeb
		border-radius: 4px

		resize: none

</style>
