<template lang="pug">
.container(v-if="track && track.album")
  .player-content
    pm-player

  .row
    .col-3
      img(:src="track.album.images[0].url")
      p
        button.btn.btn-info(@click="selectTrack") {{ $t('trackDetail.play_preview') }}

    .col-9
      h3 {{ trackTitle }}

      p
        strong {{ $t('trackDetail.name_artist') }}:&nbsp;
        span {{ track.artists[0].name }}
      p
        strong {{ $t('trackDetail.name_album') }}:&nbsp;
        span {{ track.album.name }}
      p
        strong {{ $t('trackDetail.url_spotify') }}:&nbsp;
        a(:href="track.external_urls.spotify", target="_blank") {{ track.external_urls.spotify }}

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import trackMixin from '@/mixins/track'
import PmPlayer from '@/components/Player.vue'

export default {
  mixins: [ trackMixin ],
  components: {
    PmPlayer
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    const id = this.$route.params.id

    if (!this.track || this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style scoped>
  img {
    width: 100%;
    max-width: 300px;
  }
  button {
    margin-top: 10px;
    display: table;
    margin: 20px auto 0;
  }
  .player-content {
    margin: 20px
  }
</style>
