<template lang="pug">
  transition(tag="div" name="slide-fade")
    .place-pop-up(v-show="activeState")
      .place-pop-up__icon
      .place-pop-up__content
        .place-pop-up__content__info
          .place-pop-up__content__info__name
            span {{ data.name }}
          .place-pop-up__content__info__rating(
            @click="reviewPage()"
          )
            star-rating(
              :rating="data.rating"
            )
          .place-pop-up__content__info__status
           span Open
          .place-pop-up__content__info__distance
            walking-distance(
              :distance="distance"
            )
        .place-pop-up__content__button
          basic-button(
            text="Get directions"
            color="green"
            textColor="white"
          )
</template>

<script>
import { mapActions } from 'vuex'

import BasicButton from '../Buttons/BasicButton.vue'
import StarRating from '../Review/StarRating.vue'
import WalkingDistance from '../Places/WalkingDistance.vue'

export default {
  name: 'place-pop-up',
  components: {
    BasicButton,
    StarRating,
    WalkingDistance
  },
  props: {
    data: Object / Array,
    activeState: Boolean,
    location: Object,
    distance: String
  },
  watch: {
    data () {
      const locationData = {
        lat: this.location.lat,
        lng: this.location.lng,
        placeId: this.data.place_id
      }
      this.getDistance(locationData)
    }
  },
  methods: {
    ...mapActions([
      'getDistance',
      'getReview'
    ]),
    reviewPage () {
      this.$router.push('/review')
      this.getReview()
    }
  }
}
</script>


<style lang="scss">
.place-pop-up {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  transform: translateY(0%);
  &__icon {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 8px;
    &:after {
      content: '';
      position: absolute;
      background-color: #e0e0e0;
      width: 30px;
      border-radius: 20px;
      height: 5px;
    }
  }
  &__content {
    padding: 20px;
    &__info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
      &__name {
        font-size: 18px;
        font-weight: 600;
        width: 50%;
      }
      &__rating {
        display: flex;
        justify-content: flex-end;
        width: 50%;
      }
      &__distance {
        padding: 15px 0;
      }
      &__status {
        font-size: 14px;
        padding: 15px 0;
        font-weight: 500;
        color: green;
        text-transform: uppercase;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100%) !important;
}
</style>
