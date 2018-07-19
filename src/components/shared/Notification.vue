<template>
<div class="container">
	<div class="col-md-4">
		<div :class="'alert alert-' + className">
			<slot name="body"></slot>
		</div>
	</div>
</div>
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