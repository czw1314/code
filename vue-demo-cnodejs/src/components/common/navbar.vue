<template>
	<div id="navbar">


		 <div class="page-container md-layout-column">
    			<md-toolbar class="top-nav">
					<md-button class="md-icon-button" @click="showNavigation = true">
						<md-icon><i class="iconfont icon-menu"></i></md-icon>
					</md-button>
					<h2 class="md-title" style="flex: 1" v-text="title"></h2>
					<md-button class="md-icon-button" @click="logout">
						<md-icon><i class="iconfont icon-close"></i></md-icon>
					</md-button>
				</md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">vue2.0  demo</span>
      </md-toolbar>
    </md-drawer>
  </div>


				<md-bottom-bar md-shift class="btm-nav">
					<md-bottom-bar-item @click.native="doAction(0)"><i class="iconfont icon-movie btm-nav-icon"></i>电影</md-bottom-bar-item>
					<md-bottom-bar-item @click.native="doAction(1)"><i class="iconfont icon-music btm-nav-icon"></i>音乐</md-bottom-bar-item>
					<md-bottom-bar-item @click.native="doAction(2)"><i class="iconfont icon-book btm-nav-icon"></i>每日一文</md-bottom-bar-item>
					<md-bottom-bar-item @click.native="doAction(3)"><i class="iconfont icon-photo btm-nav-icon"></i>图片</md-bottom-bar-item>
				</md-bottom-bar>


			

	</div>
</template>


<script>
	export default {
		data() {
			return {
			  showNavigation: false,
             title:''
			}
		},
		created:function(){
		var title=window.location.href.split("/") 
		switch(title[title.length-1]){
		case "movie":
		            this.title='电影';
				    break;
				    	case "music":
		            this.title='音乐';
				    break;
				    	case "book":
		            this.title='文章';
				    break;
				    	case "photo":
		            this.title='图片';
				    break;
		}
		},
		methods: {
			logout() {
				this.$router.push({
					name: 'login'
				});
			},
			doAction(index) {
				this.go(index);
			},
			go(index) {
				switch (index) {
					case 0:
						this.$router.push({
							name: 'movie'
						});
						this.title='电影';
						break;
					case 1:
						this.$router.push({
							name: 'music'
						});
						this.title='音乐';
						break;
					case 2:
						this.$router.push({
							name: 'book'
						});
						this.title='文章';
						break;
					case 3:
						this.$router.push({
							name: 'photo'
						});
						this.title='图片';
						break;
				}
			},
		}
	}
</script>
<style lang="scss">
	.top-nav {
		position: fixed !important;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 32222 !important;
		background-color:#0061b0 !important;
	}
			.md-title{
		margin:0 !important
		}
	.md-bottom-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 3
	}
	.md-button{
	max-width:10000px !important
	}
	.md-transparent{
	margin-top:64px
	}
	.btm-nav-icon {
		display: block;
		margin-bottom: 10px;
	}
	.iconfont{
		font-size: 24px;
	}

</style>



