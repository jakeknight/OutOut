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
    width: 100%;
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    border-radius: 10px;
    color: white;
    border: 2px solid white;
    opacity: 0.8;
    &__text {
      font-size: 14px;
    }
  }
</style>
