<template lang="pug">
.container
	.row
		.col-md-12
			div(:class="'alert alert-' + className")
				slot(name="body")
</template>

<style lang="css" scoped>
.alert {
	margin-top: 20px;
}
</style>

<script>
export default {
  props: {
    className: { type: String }
  }
}
</script>
