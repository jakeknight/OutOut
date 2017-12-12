<template lang="pug">
  .place-pop-up
    .place-pop-up__icon
      | ^
    .place-pop-up__content
      .place-pop-up__content__image
        img(src="imgSrc")
      .place-pop-up__content__name
        span {{ data.name }}
      .place-pop-up__content__rating
      span {{ data.rating }}
      .place-pop-up__content__button
        basic-button(
          text="Get directions"
          color="green"
          textColor="white"
        )
</template>

<script>
import BasicButton from '../Buttons/BasicButton.vue'
export default {
  name: 'place-pop-up',
  components: {
    BasicButton
  },
  props: {
    data: Object / Array
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
  height: 60%;
  width: 100%;
  transform: translateY(0%);
  &__icon {
    text-align: center;
  }
}
</style>
