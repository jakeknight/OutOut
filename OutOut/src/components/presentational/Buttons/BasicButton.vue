<template lang="pug">
  .basic-button(
    :style="{backgroundColor: color, color: textColor}"
  )
    span.basic-button__text {{ text }}
</template>

<script>
export default {
  name: 'basic-button',
  props: {
    text: String,
    color: String,
    textColor: String
  }
}
</script>


<style lang="scss">
  .basic-button {
    width:100%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    border-radius: 10%;
    color: white;
    border: 2px solid white;
    &__text {
      font-size: 14px;
    }
  }
</style>
