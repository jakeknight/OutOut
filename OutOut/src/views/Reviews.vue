<template lang="pug">
  .reviews
    .reviews__back
      back-icon(
        @click="goBack"
      )
    .reviews__title
      h1 Reviews
    .review__reviews
      review-holder(
        :data="reviewData"
      )
</template>

<script>
import { mapState } from 'vuex'

import ReviewHolder from '../components/containers/review-holder.vue'
import BackIcon from '../components/presentational/Icons/Back.vue'
export default {
  name: 'review',
  components: {
    ReviewHolder,
    BackIcon
  },
  computed: {
    ...mapState([
      'reviewData'
    ])
  },
  methods: {
    goBack  () {

    }
  }
}
</script>

<style lang="scss">
.reviews {
  position: fixed;
  padding: 20px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 50;
  overflow-y: scroll;
  &__back {
    width: 16px;
    transform: rotate(180deg);
  }
  &__title {

  }
}
</style>
