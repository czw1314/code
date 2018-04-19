<template>
	<div id="music">
		<div class="layout-wrap" md-gutter>
			<div v-for="(album, index) of albums">
				<img class="album-img" :src="album.bg" @click="showList(index)">
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	export default {
		components: {
		},
		data() {
			return {
				albums: [
						{
						name: "新歌榜",
						id: 0,
						bg: require("./img/new_music.jpg")
					},
						{
						name: "热歌榜",
						id: 1,
						bg: require("./img/hot.jpg")
					},
				{
						name: "飙升榜",
						id: 3,
						bg: require("./img/soar_music.jpg")
					},
					{
						name: "KTV嗨榜",
						id: 7,
						bg: require("./img/ktv_music.jpg")
					},
					{
						name: "华语金曲榜",
						id: 17,
						bg: require("./img/chinese_music.jpg")
					},

				]
			};
		},
		computed: {
		},
		mounted: function() {
		},
		methods: {
			showList(index) {
				this.$router.push({
					name: 'music-list',
					params: {
						listId: this.albums[index].id
					}
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	#music {
		height: 100vh;
		box-sizing: border-box;
		padding: 64px 0 56px;
		text-align: center;
	}
	.md-layout {
		text-align: center;
		&.layout-wrap {
			overflow-y: scroll;
			-webkit-overflow-scrolling: touch;
			height: 100%;
		}
	}
	.album-img {
		width: 100%;
		max-height: 100%;
	}
</style>



