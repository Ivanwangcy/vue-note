<template lang="html">
  <div>{{this. msg}}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['msg']),
  methods: mapActions(['randomTitle']),

}
</script>
