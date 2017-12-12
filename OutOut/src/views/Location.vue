<template lang="pug">
  .location
    .location__loader(v-show="loaderActive" ref="loader")
      lottie(:options="loaderOptions" :height="357" :width="deviceWidth")
    //- .location__find(@click="getLocation" v-show="permissionsErr" ref="locationFind")
    //-   basic-button(
    //-     text="FIND LOCATION"
    //-     color="transparent"
    //-   )
    .location__error(v-show="errorMessage")
      span
    .location__animations
      wave()
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Lottie from 'vue-lottie'
import { TweenMax } from 'gsap'

import BasicButton from '../components/presentational/Buttons/BasicButton.vue'
import Wave from '../components/presentational/SVG/Wave.vue'

import animationData from '../assets/js/animationData/location.json'
export default {
  name: 'location',
  components: {
    BasicButton,
    Wave,
    Lottie
  },
  data () {
    return {
      loaderOptions: {animationData: animationData},
      loaderActive: false,
      errorMessage: false,
      showButton: false,
      deviceHeight: window.innerHeight,
      deviceWidth: window.innerWidth
    }
  },
  mounted () {
    this.getLocation()
  },
  methods: {
    ...mapActions([
      'getPlaces'
    ]),
    getLocation () {
      this.loaderActive = true
      this.permissionsErr = false
      this.loaderAnimate()
      this.$getLocation()
        .then(coordinates => {
          this.getPlaces(coordinates)
        })
        .catch(err => {
          console.log(err)
          this.loaderActive = false
          this.permissionsErr = true
        })
    },
    loaderAnimate () {
      TweenMax.to(this.$refs.loader, 1.5, {opacity: 1})
    }
  },
  computed: {
    ...mapState([
      'places'
    ])
  }
}
</script>

<style lang="scss">
  .location {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(#302675, #081b44);
    &__loader {
      opacity: 0;
    }
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
