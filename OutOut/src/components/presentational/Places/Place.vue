<template lang="pug">
  .place
    .place__name
      span {{ name }}
    .place__rating
      span {{ rating }}
</template>

<script>
export default {
  name: 'place',
  props: {
    name: String,
    rating: Number
  }
}
</script>

<style lang="scss">
  .place {
    padding: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    &__name {
      color: #302675;
      font-weight: bold;
    }
  }
</style>
