<template lang="pug">
  .page.page--index
    main-header()
    results-holder(
      :data="places"
      :location="userLocation"
      :distance="distance"
    )
</template>

<script>
import { mapState } from 'vuex'

import ResultsHolder from '../components/containers/results-holder.vue'
import MainHeader from '../components/presentational/Header/MainHeader.vue'
export default {
  name: 'index',
  components: {
    ResultsHolder,
    MainHeader
  },
  computed: {
    ...mapState([
      'places',
      'userLocation',
      'distance'
    ])
  }
}
</script>

<style>

</style>
