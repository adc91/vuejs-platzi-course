<template lang="pug">
nav.navbar.navbar-expand.navbar-dark.bg-dark
  a.navbar-brand(href='/') Platzi Music - Está Vue-nísimo
  button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navBarMain', aria-controls='navBarMain', aria-expanded='false', aria-label='Toggle navigation')
    span.navbar-toggler-icon
  #navBarMain.collapse.navbar-collapse
    ul.navbar-nav.mr-auto
      router-link(tag='li', to='about')
        a.nav-link
          | Acerca de
          span.sr-only
</template>

<style scoped>
.player {
  margin: 20px 0 35px;
}
</style>
