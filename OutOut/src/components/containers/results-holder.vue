<template lang="pug">
  .places-holder
    transition(class="place-holder__popup" tag="div" name="slide-fade")
      place-pop-up(
        v-show="popUpActive"
        :data="activePlace[0]"
      )
    .places-holder__place(
      v-for="place, index in data"
      @click="showPlacePopUp(place.id)"
    )
      place(
        :name="place.name"
        :rating="place.rating"
      )
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Place from '../presentational/Places/Place.vue'
import PlacePopUp from '../presentational/Places/PlacePopup.vue'
export default {
  name: 'results-holder',
  components: {
    Place,
    PlacePopUp
  },
  data () {
    return {
      popUpActive: false
    }
  },
  props: {
    data: Object / Array
  },
  methods: {
    ...mapActions([
      'setActivePlace'
    ]),
    showPlacePopUp (id) {
      this.setActivePlace(id)
      this.popUpActive = !this.popUpActive
    }
  },
  computed: {
    ...mapState([
      'activePlace'
    ])
  }
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%) !important;
}
</style>


