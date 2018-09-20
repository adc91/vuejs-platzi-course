<template lang="pug">
nav.navbar.navbar-expand.navbar-dark.bg-dark
  router-link(class='navbar-brand', to='/') Platzi Music - Está Vue-nísimo
  button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navBarMain', aria-controls='navBarMain', aria-expanded='false', aria-label='Toggle navigation')
    span.navbar-toggler-icon
  #navBarMain.collapse.navbar-collapse
    ul.navbar-nav.mr-auto
      router-link(tag='li', to='about')
        a.nav-link
          | {{ $t('header.about') }}
          span.sr-only
  .pull-right
    span Cambiar a:&nbsp;
    a(href="#" @click="selectLang('es')") Español
    span &nbsp;|&nbsp;
    a(href="#" @click="selectLang('en')") Inglés
</template>

<script>
export default {
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
span,
a:hover {
  color: #FFF;
}
.player {
  margin: 20px 0 35px;
}
</style>
