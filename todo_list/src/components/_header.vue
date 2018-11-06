<template>
	<div class="header">
		<div class="top">
			<div class="inner">
				<label>ToDoList</label>
				<input type="text" placeholder="添加ToDo">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header"
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.top {
		height: 50px;
		line-height: 50px;
    	background: rgba(47,47,47,0.98);
	}
	.inner {
		margin: 0 auto;
		width: 600px;
		display: flex;
		justify-content: space-between;
	}
	.inner label {
		color: #DDD;
    	font-size: 24px;
	}
	.inner input {
		font-size: 13px;
		width: 60%;
		height: 24px;
		margin-top: 12px;
		text-indent: 10px;
		border-radius: 5px;
		box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;
		background: #fff;
		border: none;
		outline: none;
	}
	
</style>