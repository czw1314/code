<template>
	<div id="music-play">
			<headerBack :title="this.list[this.index].name"></headerBack>
		<div class="container-wrap">

			<div class="container">
				<div class="lyric-wrap">
					<img :src="this.list[this.index].album.picUrl">
	
				</div>
				<div class="main">
					<h2>{{this.list[this.index].name}}</h2>
					<p>{{this.list[this.index].artists[0].name}}</p>
					
					<div class="panel">
					      <div class="play-audio">
        <audio controls="" ref="player"></audio>
      </div>
					   <md-button class="md-icon-button">
   <i class="btn icon-playPrev iconfont" @click.prevent="playPrev()"></i>
      </md-button>
      					   <md-button class="md-icon-button">
  <i  class="btn iconfont" :class="{'icon-plays':isPlaying,'icon-zanting':!isPlaying}"@click.prevent="togglePlay()" ref="toggle"></i>
      </md-button>
            					   <md-button class="md-icon-button">
<i class="btn iconfont" @click.prevent="playNext()">&#xe62d;</i>
      </md-button>
      <md-dialog-alert :md-active.sync="inputFlag" :md-content="content"/>
					</div>
				</div>
			</div>
		</div>
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
			inputFlag:false,
				dis: 0,
	            index:'',
	            list:'',
				song:'',
				url:'',
				content:'',
				isPlaying:false,
				lyric:{},
				lyricData: []
			};
		},
		created(){
this.local()
this.loc()

		this.getUrl(this.list[this.index].id)
		},
		computed: {

		},
		methods: {
			getUrl(id) {
			axios.get(API_PROXY + 'https://musicapi.leanapp.cn/music/url?id=' +id)
          .then(function(res) {
          this.$refs.player.src=res.data.data[0].url;
          }.bind(this))
            .catch(function(error) {
            console.log(error);
          });
			},
			togglePlay() {
				if(this.$refs.player.paused){
				this.$refs.player.play();
				this.isPlaying=true
				}
				else{
				this.$refs.player.pause();
				this.isPlaying=false
				}
			},
			playNext() {
						    this.$refs.player.pause()
		        this.local()
                this.loc()

				var index = Number(this.index)+1;
				if(index>this.list.length - 1){
				localStorage.setItem("index",this.index)
                   this.content="这已经是最后一首了"
                   this.inputFlag=true
                   return 
				}
				else{
				this.index++
				this.getUrl(this.list[this.index].id)
				localStorage.setItem("index",this.index)
				/*更改视图歌曲信息*/
				this.isPlaying=false
				}
			},
			playPrev() {
			   this.$refs.player.pause()
			    this.local()
                this.loc()
				var index = this.index-1;
				if(index<0){
				localStorage.setItem("index",this.index)
                   this.content="这已经是第一首了"
                   this.inputFlag=true
                     return 
				}
				else{
				this.index--
				this.getUrl(this.list[this.index].id)
				localStorage.setItem("index",this.index)
				/*更改视图歌曲信息*/
						this.isPlaying=false
						}
			},
			local(){
			if(!localStorage.index){
			localStorage.setItem("index",this.$route.params.index)
			this.index=localStorage.getItem("index")
			}
			else{
			this.index=localStorage.getItem("index")
 			}
 			},
 			loc(){
 				if(!localStorage.list){
				localStorage.setItem("list",JSON.stringify(this.$route.params.list))
			this.list=JSON.parse(localStorage.getItem("list"))
			}
			else{
			this.list=JSON.parse(localStorage.getItem("list"))
			}
 			},
			}

		
	}
</script>
<style scoped lang="scss">
	h2 {
		font-size: 1.6rem;
	}
	div,
	p {
		font-size: 1rem;
		color: #fff;
	}
	.md-toolbar .md-title {
		font-size: 1.2rem !important;
	}
	#music-play {
		min-height: 100vh;
		box-sizing: border-box;
		padding: 64px 0 0 0;
		text-align: center;
	}
	.container-wrap {
		box-sizing: border-box;
		padding-top: 64px;
		margin-top: -64px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #545863;
	}
	.container {
		width: 90%;
		height: 95%;
		box-shadow: 0px 0px 10px 0px #2a2c33;
		.lyric-wrap {
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			position: relative;
			height: 60%;
			img {
				width: 100%;
				height: 100%;
			}
			&::after {
				content: "";
				position: absolute;
				z-index: 1;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				background-color: rgba(58, 58, 58, 0.75);
			}
			.lyric-box {
				position: absolute;
				box-sizing: border-box;
				padding: 0 20px;
				width: 100%;
				height: 80%;
				overflow: hidden;
				.lyric-content {
					position: relative;
					overflow: hidden;
					z-index: 2;
					width: 100%;
					transition: all 1s;
					transform: translateY(0px);
				}
				.lyric {
					transition: all .3s;
					font-size: 1.6rem;
					color: #bdbdbd;
					line-height: 2.2;
					&.active {
						transform: scale(1.1);
						font-weight: bold;
						color: #009688 !important;
					}
				}
			}
		}
		.main {
			position: relative;
			height: 40%;
			box-sizing: border-box;
			padding: 6% 0;
			h2 {
				margin: 10px 0;
				line-height: 1.0;
			}
		}
	}
	.progress-wrap {
		margin: 4% 0;
		display: flex;
		align-items: center;
		.time {
			flex: 2
		}
		.progress-bg {
			position: relative;
			height: 4px;
			background-color: #757575;
			flex: 8;
			.progress {
				position: absolute;
				height: 100%;
				left: 0;
				background-color: #fff;
				.progress-bar {
					position: absolute;
					width: 12px;
					height: 12px;
					border-radius: 50%;
					background-color: #fff;
					left: 100%;
					top: 50%;
					margin-top: -6px;
				}
			}
		}
	}
	.panel {
		height: 60px;
		display: flex;
		align-items: center;
		justify-content:space-between;
		.btn {
			color: #fff;
			font-size: 40px;
		}
		.play-audio{
  display: none;
}
		.prev,
		.next {
			flex: 4;
		}
		.play {
			font-size: 80px;
			flex: 2;
		}
	}
	@media screen and (max-width: 640px) {
		.panel .btn {
			font-size: 34px;
		}
		.panel .play {
			font-size: 60px;
		}
	}
	@media screen and (max-width: 320px) {
		.container .lyric-wrap .lyric-box .lyric {
			font-size: 1.2rem;
		}
	}
</style>



