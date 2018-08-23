<template lang="html">
  <div id="main">
	<div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo">
      </div>
      <div class="form-group">
        <label for="searchQuery"><strong>Ingrese el nombre del track, artista o álbum:</strong></label>
        <input type="text" class="form-control" v-on:keyup.enter="search" v-model="searchQuery" placeholder="Ej: trevor rabin, the race of his life">
      </div>

      <button class="btn btn-primary" @click="search">Buscar</button>

      <pm-player/>

      <pm-loader v-show="isLoading"/>

      <div v-show="!isLoading">
        <h5>{{ searchTotalResults }}</h5>

        <pm-notification v-show="notification.show" :class-name="notification.className" :body="notification.body">
          <div slot="body">{{ notification.body }}</div>
        </pm-notification>

        <div class="row">
          <div class="col-sm-6 col-md-3 col-lg-3" v-for="t in tracks">
            <pm-track v-blur="t.preview_url" :track="t" :class="{ 'is-active' : t.id === selectedTrack.id }" @select="setSelectedTrack"/>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        return `Mostrando ${this.tracks.length} resultados de ${this.tracksTotal}`
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
            this.notification.body = `Se han encontrado ${res.tracks.total} resultados en total...`

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
