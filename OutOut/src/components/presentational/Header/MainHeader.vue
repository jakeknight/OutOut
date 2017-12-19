<template lang="pug">
  .main-header(
    ref="main-header"
  )
    .main-header__logo
      main-logo()
    .main-header__filter
      span.main-header__filter__top
      span.main-header__filter__middle
      span.main-header__filter__bottom
    .main-header__burger
      nav-icon()
</template>

<script>
import MainLogo from '../Logo/Logo.vue'
import NavIcon from '../Navigation/NavIcon.vue'
// import { TweenLite } from 'gsap'
export default {
  name: 'main-header',
  components: {
    MainLogo,
    NavIcon
  },
  mounted () {
    // const header = this.$refs['main-header']
    // setTimeout(() => {
    //   TweenLite.to(header, 0.8, {opacity: 0})
    // }, 3000)
  }
}
</script>

<style lang="scss">
  .main-header {
    position: relative;
    top: 0;
    padding: 20px;
    height: 80px;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    &__logo {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    &__filter {
      color: #fff;
      span {
        display: block;
        margin-bottom: 6px;
      }
      &__top {
        height: 2px;
        width: 22px;
        background-color: white;
      }
      &__middle {
        height: 2px;
        width: 12px;
        background-color: white;
      }
      &__bottom {
        height: 2px;
        width: 7px;
        background-color: white;
      }
    }
    &__burger {

    }
  }
</style>
