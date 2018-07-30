<template>
  <div class="container" v-if="track && track.album">
      <div class="player-content">
        <pm-player/>
      </div>
      <div class="offset-md-4 col-md-4">
        <pm-track :track="track"/>    
      </div>
  </div>
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'
import PmPlayer from '@/components/Player.vue'

export default {
  components: {
    PmTrack,
    PmPlayer
  },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then((res) => {
        this.track = res
      })
  }
}
</script>

<style scoped>
  .player-content {
    margin: 20px
  }
</style>