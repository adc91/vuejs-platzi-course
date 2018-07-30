<template>
	<nav class="navbar navbar-expand navbar-dark bg-dark">
		<a class="navbar-brand" href="#">Platzi Music - Está Vue-nísimo</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarsExample02">
			<ul class="navbar-nav mr-auto">
				<router-link tag="li" to="/">
					<a class="nav-link">Buscar <span class="sr-only"></span></a>
				</router-link>
				<router-link tag="li" to="about">
					<a class="nav-link">About <span class="sr-only"></span></a>
				</router-link>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
.player {
  margin: 20px 0 35px;
}
</style>