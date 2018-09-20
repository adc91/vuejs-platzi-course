<template lang="pug">
.card
  img(:src="track.album.images[1].url" :alt="track.album.name" class="card-img-top")
  .card-body
    h5(class="card-title") {{ track.name }}
    p(class="card-text") {{ track.artists[0].name }}
    button(@click="selectTrack()" class="btn btn-primary") {{ $t('track.preview') }}
    button(@click="goToTrack(track.id)" class="btn btn-info") {{ $t('track.detail') }}
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
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
