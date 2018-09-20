<template lang="pug">
#main
  .container
    .logo
      img(src='@/assets/logo.png', alt='Logo')

    .form-group
      label(for='searchQuery')
        strong {{ $t('search.label') }}

      input.form-control(type='text', v-on:keyup.enter='search', v-model='searchQuery', :placeholder="$t('search.placeholder')")

      button(class="btn btn-primary", @click="search") {{ $t('search.button') }}

      pm-player

      transition(name="move")
        pm-loader(v-show="isLoading")

      div(v-show="!isLoading")
        h5 {{ searchTotalResults }}

        transition(name="move")
          pm-notification(v-show="notification.show" :class-name="notification.className" :body="notification.body")
            div(slot="body") {{ notification.body }}

        .row
          .col-sm-6.col-md-3.col-lg-3(v-for='t in tracks')
            pm-track(v-blur='t.preview_url', :track='t', :class="{ 'is-active' : t.id === selectedTrack.id }", @select='setSelectedTrack')
</template>

<script>
  // Services
  import trackService from '@/services/track'

  // Components
  import PmTrack from '@/components/Track.vue'
  import PmPlayer from '@/components/Player.vue'

  // Components shared
  import PmLoader from '@/components/shared/Loader.vue'
  import PmNotification from '@/components/shared/Notification.vue'

  export default {
    name: 'app',
    components: {
      PmTrack,
      PmLoader,
      PmNotification,
      PmPlayer
    },
    data () {
      return {
        isLoading: false,
        notification: { show: false },
        selectedTrack: '',
        searchQuery: '',
        tracks: [],
        tracksTotal: 0
      }
    },
    computed: {
      searchTotalResults () {
        if (this.tracksTotal > 0) {
          return this.$i18n.t('search.total_results', [this.tracks.length, this.tracksTotal])
        }
      },
      show () {
        return this.notification.show
      }
    },
    watch: {
      show () {
        if (this.notification.show) {
          setTimeout(() => {
            this.notification.show = false
          }, 3000)
        }
      }
    },
    methods: {
      search () {
        if (!this.searchQuery) {
          return ''
        }

        this.isLoading = true

        trackService.search(this.searchQuery)
          .then(res => {
            // Desplegar barra de notificicion de resultados
            this.notification.show = true
            this.notification.body = this.$i18n.t('search.total_tracks', [res.tracks.total])

            if (res.tracks.total === 0) {
              this.notification.className = 'danger'
            } else {
              this.notification.className = 'success'
            }

            this.tracks = res.tracks.items
            this.tracksTotal = res.tracks.total
            this.isLoading = false
          })
      },
      setSelectedTrack (track) {
        this.selectedTrack = track
      }
    }
  }
</script>

<style scoped>
button {
  margin-top: 15px;
}
</style>
