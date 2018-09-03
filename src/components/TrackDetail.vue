<template lang="pug">
.container(v-if="track && track.album")
  .player-content
    pm-player

  .row
    .col-3
      img(:src="track.album.images[0].url")
      p
        button.btn.btn-info(@click="selectTrack") Reproducir Preview

    .col-9
      h1 {{ track.name }}

      p
        strong Artista:&nbsp;
        span {{ track.artists[0].name }}
      p
        strong Album:&nbsp;
        span {{ track.album.name }}
      p
        strong URL en Spotify:&nbsp;
        a(:href="track.external_urls.spotify", target="_blank") {{ track.external_urls.spotify }}

</template>

<script>
import trackMixin from '@/mixins/track'
import trackService from '@/services/track'
import PmPlayer from '@/components/Player.vue'

export default {
  mixins: [ trackMixin ],
  components: {
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
