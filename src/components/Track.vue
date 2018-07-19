<template>
  <div class="card">
    <img :src="track.album.images[1].url" :alt="track.album.name" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ track.name }}</h5>
      <p class="card-text">{{ track.artists[0].name }}</p>
      <a href="javascript:void(0);" @click="selectTrack()" class="btn btn-primary">Abrir URL</a>
    </div>
  </div>
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
      this.$emit('select', {
        id: this.track.id,
        url: this.track.external_urls.spotify
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
}
</style>