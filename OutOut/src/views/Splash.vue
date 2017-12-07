<template lang="pug">
  .splash-screen
    .splash-screen__location

    .splash-screen__animations
      wave()
</template>

<script>
// import Lottie from 'vue-lottie'
// import waveAnimation from '../assets/js/animationData/wave.json'
// import locationAnimation from '../assets/js/animationData/location.json'

import BasicButton from '../components/presentational/Buttons/BasicButton.vue'
import Wave from '../components/presentational/SVG/Wave.vue'
export default {
  name: 'Splash',
  components: {
    // Lottie,
    BasicButton,
    Wave
  },
  data () {
    return {
      // waveOptions: {animationData: waveAnimation},
      // locationOptions: {animationData: locationAnimation}
    }
  },
  mounted () {
  },
  methods: {
    // handleAnimation: function (anim) {
    //   this.anim = anim
    // }
  }
}
</script>

<style lang="scss">
  .splash-screen {
    height: 100vh;
    width: 100%;
    background: linear-gradient(#302675, #081b44);
  }
</style>
