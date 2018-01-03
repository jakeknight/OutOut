<template lang="pug">
  .nav-icon( :class="{ active: activeNav }" ref="nav-icon" @click="navToggle")
    span.nav-icon__line.nav-icon__line--short
    span.nav-icon__line
    span.nav-icon__line.nav-icon__line--cross()
    span.nav-icon__line.nav-icon__line--short(style="left:0;")
</template>


<script>
export default {
  name: 'nav-icon',
  data () {
    return {
      activeNav: false
    }
  },
  methods: {
    navToggle () {
      this.activeNav = !this.activeNav
    }
  }
}
</script>

<style lang="scss">
.nav-icon {
  position: relative;
  transform: rotate(135deg);
  span {
    &:nth-of-type(4) {
      transform: rotate(180deg);
    }
  }
  &__line {
    display: block;
    position: relative;
    margin-bottom: 6px;
    height: 2px;
    width: 25px;
    background-color: #fff;
    transition: all 0.3s ease;
    &--cross {
      transform: rotate(0deg);
      transition: all 0.5s ease;
      position: absolute;
      top: 9px;
      display: none;
    }
    &--short {
      width: 15px;
      margin-left: 3.5px;
    }
  }
}

.active {
  span {
    background-color: #fff !important;
    &:nth-of-type(1) {
      width: 0px;
      transition: width 0.4s ease;
    }
    &:nth-of-type(3) {
      display: block !important;
      transform: rotate(-90deg) !important;
      transition: all 0.4s ease;
    }
    &:nth-of-type(4) {
      width: 0px;
      left: 20px !important;
      transition: width 0.4s ease, left 0.4s ease;
    }
  }
}

</style>
