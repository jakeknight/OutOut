<template lang="pug">
  .review-holder
    .review-holder__review(
      v-for="review, index in data"
    )
      review(
        :key="index"
        :name="review.author_name"
        :avatar="review.profile_photo_url"
        :rating="review.rating"
        :date="review.time"
        :review="review.text"
      )
</template>

<script>
import Review from '../presentational/Review/Review.vue'
export default {
  name: 'review-holder',
  components: {
    Review
  },
  props: {
    data: Object / Array
  }
}
</script>


<style lang="scss">

</style>
