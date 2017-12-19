<template lang="pug">
  .rating(@click="reviewPage")
    star-rating(
      :rating="rating"
      :show-rating="false"
      :increment="0.01"
      :star-size="15"
    )
</template>

<script>
import { mapActions } from 'vuex'

import StarRating from 'vue-star-rating'
export default {
  props: {
    rating: Number
  },
  components: {
    StarRating
  },
  methods: {
    reviewPage () {
      this.$router.push('/review')
      this.getReview()
    },
    ...mapActions([
      'getReview'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
