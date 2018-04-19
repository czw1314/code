<template>
	<div id="home">
		<!-- <audio :src="audioSrc" id="audio"></audio> -->

			<navBar></navBar>

			<keep-alive>
				<router-view></router-view>
			</keep-alive>

	</div>
</template>
<script>
	import navBar from "../../components/common/navbar.vue"
	import movie from "../../components/movie/movie.vue"
	import music from "../../components/music/music.vue"
	export default {
		data() {
			return {
			}
		},
		mounted() {},
		computed: {
			theme() {
				return this.$store.getters.THEME_COLOR
			},
		},
		methods: {
			toggleLeftSidenav() {
				this.$refs.leftSidenav.toggle();
			},
			open(ref) {
				console.log('Opened: ' + ref);
			},
			close(ref) {
				console.log('Closed: ' + ref);
			},
		},
		components: {
			navBar,
			movie,
			music,
		}
	}
</script>
<style lang="scss" scoped>
#home{
	color:black
}

</style>