<template lang="pug">
  .page.page--index
    results-holder(
      :data="places"
    )
</template>

<script>
import { mapState } from 'vuex'

import ResultsHolder from '../components/containers/results-holder.vue'
export default {
  name: 'index',
  components: {
    ResultsHolder
  },
  computed: {
    ...mapState([
      'places'
    ])
  }
}
</script>

<style>

</style>
