<template lang="pug">
  #app
    location(v-show="gotResults")
    router-view(v-show="!gotResults")
</template>

<script>
import { mapState } from 'vuex'
import Location from './views/Location.vue'
export default {
  name: 'app',
  components: {
    Location
  },
  data () {
    return {
      gotResults: false
    }
  },
  watch: {
    places () {
      // this.gotResults = true
    }
  },
  computed: {
    ...mapState([
      'places'
    ])
  }
}
</script>

<style lang="scss" src="@/assets/scss/main.scss">
</style>
