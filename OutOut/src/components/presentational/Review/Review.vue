<template lang="pug">
  .review
    .review__avatar
      img(
        :src="avatar"
      )
    .review__info
      .review__info__name
        | {{ name }}
      .review__info__date
       | {{ date }}
      .review__info__rating
        star-rating(
          :rating="rating"
        )
    .review__review
      | {{ review }}
</template>

<script>
import StarRating from '../Review/StarRating.vue'
export default {
  props: {
    name: String,
    avatar: String,
    date: Number,
    rating: Number,
    review: String
  },
  components: {
    StarRating
  }
}
</script>

<style lang="scss">
  .review {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid 	#E0E0E0;
    &__avatar {
      width: 25%;
      img {
        height: 65px;
        width: 65px;
        border-radius: 50%;
      }
    }
  &__info {
    display: flex;
    flex-direction: column;
    width: 70%;
    &__name {
      font-weight: 600;
      font-size: 14px;
    }
    &__date {
      font-size: 14px;
    }
    &__rating {
      margin-top: 8px;
    }
  }
  &__review {
    margin-top: 18px;
    font-size: 14px;
  }
  }
</style>
