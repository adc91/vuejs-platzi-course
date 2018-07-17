<template lang="html">
  <div id="app">
    <div class="container">
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo">
      </div>
      <div class="form-group">
        <label for="searchQuery"><strong>Ingrese el nombre del track, artista o álbum:</strong></label>
        <input type="text" class="form-control" v-model="searchQuery" placeholder="Ej: trevor rabin, the race of his life">
      </div>
      <button class="btn btn-primary" @click="search">Buscar</button>
      <h4>{{ searchTotalResults }}</h4>
      <ul>
        <li v-for="track in tracks">
          <img :src="track.album.images[2].url" :alt="track.album.name">
          {{ track.artists[0].name}} - {{ track.album.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import trackService from './services/track'

  export default {
    name: 'app',
    data () {
      return {
        searchQuery: '',
        tracks: [],
        total: 0
      }
    },
    computed: {
      searchTotalResults () {
        return `Encontrados: ${this.tracks.length}`
      }
    },
    methods: {
      search () {
        if (!this.searchQuery) {
          return ''
        }

        trackService.search(this.searchQuery)
          .then(res => {
            this.tracks = res.tracks.items
          })
      }
    }
  }
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  margin-top: 25px;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

h4 { margin-top: 25px; }

.logo {
  margin-bottom: 25px;
}
</style>
