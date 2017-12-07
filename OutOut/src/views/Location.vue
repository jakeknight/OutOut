<template lang="pug">
  .location
    .location__find(@click="getLocation")
      basic-button(
        text="Find my location"
        color="transparent"
      )
      span.location__find__lat-lng(ref="location")
    .location__animations
      wave()
</template>

<script>
import BasicButton from '../components/presentational/Buttons/BasicButton.vue'
import Wave from '../components/presentational/SVG/Wave.vue'
export default {
  name: 'location',
  components: {
    BasicButton,
    Wave
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    getLocation () {
      this.$getLocation()
        .then(coordinates => {
          this.$refs.location.innerHTML = 'Latitude: ' + coordinates.lat + '<br>Longitude: ' + coordinates.lng
        })
    }
  }
}
</script>

<style lang="scss">
  .location {
    height: 100vh;
    width: 100%;
    background: linear-gradient(#302675, #081b44);
    &__find {
      position: relative;
      z-index: 10;
      top: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__lat-lng {
        padding-top: 30px;
        color: white;
      }
    }
  }
</style>
