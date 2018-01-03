<template>
  <div class="walking-distance">
    <div class="walking-distance__text">
      <span>{{ distance }} walk</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    distance: String
  }
}
</script>

<style lang="scss">
.walking-distance {
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
  }
}
</style>
