<template>
	<div id="music-list">
			<headerBack :title="albumName"></headerBack>
			<ul v-if="flag" v-show="!spinnerFlag">
				<li v-for="(music, index) of list" @click='goPlay(index)'>
					<div class="image">
						<img :src="music.album.picUrl" alt="People">
					</div>
					<p id="artists">{{music.name}}<span>/{{music.artists[0].name}}</span></p>
					<div class="play">
						<i class="iconfont">&#xe719;</i>
					</div>
				</li>

			</ul>
			<md-progress-spinner :md-size="60" md-mode="indeterminate" v-show="spinnerFlag"></md-progress-spinner>
	</div>
</template>
<script>
	import axios from "axios"
	import HeaderBack from "../common/header_back.vue"
	export default {
		components: {
			headerBack: HeaderBack
		},
		data() {
			return {
				id: this.$route.params.listId,
				flag: true,
				list:[],
				searchList: [],
				spinnerFlag: true
			};
		},
		computed: {
			albumName() {
				var mapAlbum = {
					0: "新歌榜",
					1: "热歌榜",
					3: "飙升榜",
					7: "KTV麦榜",
					17: "华语金曲榜",
				}
				return mapAlbum[this.id]
			},
		},
		mounted: function() {
			this.getList();
		},
		methods: {
			getList() {
				axios.get('https://musicapi.leanapp.cn/top/list?idx='+this.id)
					.then(function(res) {
						this.list = res.data.result.tracks;	
						// 隐藏加载图标
						this.spinnerFlag = false;
					}.bind(this))
					.catch(function(error) {
						console.log(error);
					});
			},
			goPlay(index) {
				this.$router.push({
					name: 'music-play',
					params: {
					songId: this.list[index].id,
						index: index,
						song: this.list[index],
						list:this.list

					}
				})
	}
	}
	}
</script>
<style scoped lang="scss">
	#music-list {
		min-height: 100vh;
		box-sizing: border-box;
		padding: 64px 0 0 0;
		text-align: center;
		 ul{
    padding:0
    }
     li{
     display:flex;
     justify-content:space-between;
     align-items:center;
     padding:0 20px;
     .image{
     width:40px;
     heigth:40px;
     margin-right:20px
     }
     #artists{
     display:flex;
     flex:1;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
     }
     }

	}
			
	.progress {
		position: absolute;
		height: 2px;
		left: 0;
		bottom: 0px;
		background-color: rgba(0, 128, 128, .5)
	}
	.active {
		background-color: rgba(218, 218, 218, 0.57);
	}
	.md-list-item-content{
	justify-content: flex-start !important;
	}
</style>



