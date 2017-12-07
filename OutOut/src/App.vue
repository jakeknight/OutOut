<template lang="pug">
  #app
    splash
    router-view(v-show="false")
</template>

<script>
import Splash from './views/Splash.vue'
export default {
  name: 'app',
  components: {
    Splash
  }
}
</script>

<style lang="scss" src="@/assets/scss/main.scss">
</style>
