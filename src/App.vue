<template>
  <div id="app">
    <!-- 头部 -->
    <note-header></note-header>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

    <!-- 返回顶部 -->
    <back-top :visibilityHeight="480"></back-top>
  </div>
</template>
<script type="text/javascript">
  import noteHeader from './components/Header'
  import BackTop from './components/BackTop'

  export default {
    components: {
      noteHeader,
      BackTop
    }
  }
</script>

<style lang="sass">
  @import "./style.scss"
</style>
