<template lang="pug">
  .rating()
    star-rating(
      :read-only="true"
      :rating="rating"
      :show-rating="false"
      :increment="0.01"
      :star-size="15"
    )
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  props: {
    rating: Number
  },
  components: {
    StarRating
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
