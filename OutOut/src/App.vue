<template lang="pug">
  #app
    location
    router-view(v-show="false")
</template>

<script>
import Location from './views/Location.vue'
export default {
  name: 'app',
  components: {
    Location
  }
}
</script>

<style lang="scss" src="@/assets/scss/main.scss">
</style>
