const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }
      this.$emit('select', {
        id: this.track.id,
        url: this.track.external_urls.spotify
      })
      this.$bus.$emit('set-track', this.track)
    }
  }
}

export default trackMixin
