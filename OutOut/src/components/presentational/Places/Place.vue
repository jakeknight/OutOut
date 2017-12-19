<template lang="pug">
  .place
    .place__name
      span {{ name }}
    .place__rating
      star-rating(
        :rating="rating"
      )
</template>

<script>
import StarRating from '../Review/StarRating.vue'
export default {
  name: 'place',
  components: {
    StarRating
  },
  props: {
    name: String,
    rating: Number
  }
}
</script>

<style lang="scss">
  .place {
    padding: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    &__name {
      color: #fff;
    }
    &__rating {
      color: #fff;
    }
  }
</style>
