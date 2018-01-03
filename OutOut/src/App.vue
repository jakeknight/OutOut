<template lang="pug">
  #app
    location(v-show="!gotResults")
    reviews(v-show="reviewsActive")
    router-view(v-show="gotResults")
</template>

<script>
import { mapState } from 'vuex'
import Location from './views/Location.vue'
import Reviews from './views/Reviews.vue'

export default {
  name: 'app',
  components: {
    Location,
    Reviews
  },
  data () {
    return {
      gotResults: false
    }
  },
  watch: {
    places () {
      this.gotResults = true
    }
  },
  computed: {
    ...mapState([
      'places',
      'reviewsActive'
    ])
  }
}
</script>

<style lang="scss" src="@/assets/scss/main.scss">
</style>
