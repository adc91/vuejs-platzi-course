<template lang="html">
  <div id="app">
    <pm-header/>
      <router-view/>
    <pm-footer/>
  </div>
</template>

<script>
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
