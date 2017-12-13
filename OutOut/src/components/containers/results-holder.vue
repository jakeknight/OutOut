<template lang="pug">
  .places-holder
    .places-holder__popup(
      v-hammer:swipe.down="togglePopUp"
    )
      place-pop-up(
        :data="activePlace[0]"
        :activeState="popUpActive"
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
    return {}
  },
  props: {
    data: Object / Array
  },
  methods: {
    ...mapActions([
      'setActivePlace',
      'togglePopUp'
    ]),
    showPlacePopUp (id) {
      this.setActivePlace(id)
      this.togglePopUp()
    }
  },
  computed: {
    ...mapState([
      'activePlace',
      'popUpActive'
    ])
  }
}
</script>

<style lang="scss">

</style>


