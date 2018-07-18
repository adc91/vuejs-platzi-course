<template>
  <div class="col-sm-4 col-md-4 col-lg-4">
    <div class="card">
      <img :src="track.album.images[1].url" :alt="track.album.name" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ track.name }}</h5>
        <p class="card-text">{{ track.artists[0].name }}</p>
        <a :href="track.external_urls.spotify" target="_blank" class="btn btn-primary">Abrir URL</a>
      </div>
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
  }
}
</script>

<style lang="scss">
.card {
  width: 300px;
  margin-bottom: 20px;
}
</style>