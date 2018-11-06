<template>
	<div class="header">
		<div class="top">
			<div class="inner">
				<label>ToDoList</label>
				<input type="text">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.top {
		height: 50px;
    	background: rgba(47,47,47,0.98);
	}
	.inner {
		width: 600px;
	}
</style>