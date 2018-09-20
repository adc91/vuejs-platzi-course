import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'es': {
    'header': {
      'about': 'Acerca de'
    },
    'footer': {
      'development_by': 'Desarrollado con'
    },
    'about': {
      'title': 'Acerca de Platzi Music',
      'content': 'Este proyecto fue desarrollado con <i>VueJS</i> y a la API proveída por <strong>Platzi</strong> para el desarrollo del curso.'
    },
    'search': {
      'label': 'Ingrese el nombre del track, artista o álbum:',
      'placeholder': 'Ejemplo: trevor rabin, the race of his life',
      'button': 'Buscar',
      'total_results': 'Mostrando {0} resultados de {1}',
      'total_tracks': 'Se han encontrado {0} resultados en total...'
    },
    'track': {
      'preview': 'Vista Previa',
      'detail': 'Detalle'
    },
    'trackDetail': {
      'play_preview': 'Reproducir Vista Previa',
      'name_artist': 'Artista',
      'name_album': 'Álbum',
      'url_spotify': 'URL de Spofity'
    }
  },
  'en': {
    'header': {
      'about': 'About'
    },
    'footer': {
      'development_by': 'Developed with'
    },
    'about': {
      'title': 'About Platzi Music',
      'content': 'This project was developed with <i>VueJS</i> and the API provided by <strong>Platzi</strong> for the development of the course.'
    },
    'search': {
      'label': 'Enter the name of the track, artist or album:',
      'placeholder': 'Example: trevor rabin, the race of his life',
      'button': 'Search',
      'total_results': 'Showing {0} results from {1}',
      'total_tracks': 'Found {0} results in total ...'
    },
    'track': {
      'preview': 'Preview',
      'detail': 'Details'
    },
    'trackDetail': {
      'play_preview': 'Play Preview',
      'name_artist': 'Artist',
      'name_album': 'Album',
      'url_spotify': 'Spotify URL'
    }
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
