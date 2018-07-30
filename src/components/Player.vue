<template>
	<div class="container" v-if="track && track.album">
    <div class="row">
      <div class="col-md-2">
        <img :src="track.album.images[0].url" :alt="track.album.name" class="rounded-circle">
      </div>
      <div class="col-md-10">
        <strong>{{ track.name }}</strong>
        <div class="album">{{ track.album.name }}</div>  
        <audio :src="track.preview_url" controls autoplay="true"></audio>  
      </div>
    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #f9f9f9;
  border: 1px solid #e9e9e9;
  padding: 10px;
  margin: 20px 0 0;

  img {
    display: table;
    margin: 0 auto;
  }
}
.rounded-circle {
  width: 128px;
  height: 128px;
}
.album {
  margin: 5px 0 10px;
  font-size: 12px;
}
</style>