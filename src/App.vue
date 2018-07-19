<template lang="html">
  <div id="app">
    <pm-header/>
    <div class="container">
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo">
      </div>
      <div class="form-group">
        <label for="searchQuery"><strong>Ingrese el nombre del track, artista o álbum:</strong></label>
        <input type="text" class="form-control" v-on:keyup.enter="search" v-model="searchQuery" placeholder="Ej: trevor rabin, the race of his life">
      </div>
      <button class="btn btn-primary" @click="search">Buscar</button>
      <pm-loader v-show="isLoading"/>
      <div v-show="!isLoading">
        <h5>{{ searchTotalResults }}</h5>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-4" v-for="t in tracks">
            <pm-track :track="t" :class="{ 'is-active' : t.id === selectedTrack.id }" @select="setSelectedTrack"/>
          </div>
        </div>
      </div>
    </div>
    <pm-footer/>
  </div>
</template>

<script>
  // Services
  import trackService from '@/services/track'

  // Components
  import PmFooter from '@/components/layout/Footer.vue'
  import PmHeader from '@/components/layout/Header.vue'
  import PmTrack from '@/components/Track.vue'

  // Components shared
  import PmLoader from '@/components/shared/Loader.vue'

  export default {
    name: 'app',
    components: {
      PmFooter,
      PmHeader,
      PmTrack,
      PmLoader
    },
    data () {
      return {
        isLoading: false,
        selectedTrack: '',
        searchQuery: '',
        tracks: []
      }
    },
    computed: {
      searchTotalResults () {
        return `Total de resultados: ${this.tracks.length}`
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
            this.tracks = res.tracks.items
            this.isLoading = false
          })
      },
      setSelectedTrack (track) {
        this.selectedTrack = track
        window.open(this.selectedTrack.url)
      }
    }
  }
</script>

<style lang="scss">
@import "./scss/main.scss";

#app {
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

h5 { margin: 25px 0; }

.logo {
  margin-bottom: 25px;
}
</style>
