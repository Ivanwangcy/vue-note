<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

    <back-top :visibilityHeight="480"></back-top>
  </div>
</template>
<script type="text/javascript">
  import BackTop from './components/BackTop'

  export default {
    components: {
      BackTop
    }
  }
</script>

<style lang="sass">
  @import "./style.scss"
</style>
