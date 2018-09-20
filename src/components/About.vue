<template lang="pug">
.container.about
	h1 {{ $t('about.title') }}
	p(v-html="$t('about.content')")
</template>
