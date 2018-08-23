<template lang="pug">
.card
  img(:src="track.album.images[1].url" :alt="track.album.name" class="card-img-top")
  .card-body
    h5(class="card-title") {{ track.name }}
    p(class="card-text") {{ track.artists[0].name }}
    button(@click="selectTrack()" class="btn btn-primary") Preview
    button(@click="goToTrack(track.id)" class="btn btn-info") Detalle
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }
      this.$emit('select', {
        id: this.track.id,
        url: this.track.external_urls.spotify
      })
      this.$bus.$emit('set-track', this.track)
    },
    goToTrack (id) {
      this.$router.push({
        name: 'track-detail',
        params: {
          'id': id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
  button { margin-right: 10px }
}
</style>
