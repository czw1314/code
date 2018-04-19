<template>
	<div id="header">
		<md-toolbar class="top-nav">
			<md-button class="md-icon-button">
			<img src="../../assets/imgs/back.png" alt="Coffee House" @click="go">
			</md-button>
			<h2 class="md-title" style="flex: 1" v-text="title"></h2>
		<md-button class="md-icon-button" :style="{opacity:0}">
				<md-icon></md-icon>
			</md-button>
		</md-toolbar>
	</div>
</template>


<script>
	export default {
		mounted: function() {
		},
		data() {
			return {
			}
		},
		props: ['title'],
		computed: {
		},
		methods: {
			go() {
				history.go(-1);
				localStorage.removeItem("index");
				localStorage.removeItem("indexs");
				localStorage.removeItem("list");
			}
		}
	}
</script>
<style lang="scss" scoped>

	.top-nav{
	width:100%;
	display:flex;
	background-color:#0061b0;

}

</style>



