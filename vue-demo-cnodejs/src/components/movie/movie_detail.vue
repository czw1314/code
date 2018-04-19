<template>
	<div id="movie-detail">
<headerBack :title="movieDetail.title"></headerBack>
<md-progress-spinner :md-size="60" md-mode="indeterminate" v-show="spinnerFlag"></md-progress-spinner>
			<md-card class="card-movie-detail" v-show="flag">
				<md-card-area md-inset>
					<md-card-media>
						<img :src="movieDetail.images ? movieDetail.images.large : ''" alt="加载失败，刷新重试">
					</md-card-media>
					<md-card-header>
						<h2 class="md-title">{{movieDetail.title}}</h2>
						<div class="md-subhead">
							<p>{{movieDetail.countries ? movieDetail.countries[0] : ''}}/<span v-for="genre in movieDetail.genres">{{genre}}</span></p>
							<p>年份：{{movieDetail.year}}</p>
						</div>
					</md-card-header>
					<md-card-content>
						{{movieDetail.summary}}
					</md-card-content>
				</md-card-area>
				<md-card-content>
					<h3 class="md-subheading">导演：{{movieDetail.directors ? movieDetail.directors[0].name : ''}}</h3>
				</md-card-content>
		<md-card-content>
					<h3 class="md-subheading">得分情况</h3>
					<h3 class="md-subheading"><span>最高分：{{movieDetail.directors ? movieDetail.rating.max : ''}}</span>
					<span>最低分：{{movieDetail.directors ? movieDetail.rating.min : ''}}</span>
					<span>平均分：{{movieDetail.directors ? movieDetail.rating.average : ''}}</span></h3>
				</md-card-content>
			
			</md-card>

	</div>
</template>
<script>
	import headerBack from "../common/header_back.vue"
	import axios from 'axios'
	export default {
		data() {
			return {
				movieId: this.$route.params.id,
				movieDetail: {},
				spinnerFlag: true,
				flag:false
			}
		},

		mounted: function() {
			this.reqMovieDetail();
		},
		methods: {
			reqMovieDetail() {
				axios.get(API_PROXY + 'https://api.douban.com/v2/movie/subject/' + this.movieId)
					.then(function(res) {
						this.movieDetail = res.data.id ? res.data : JSON.parse(res.request.response);
						this.spinnerFlag = false;
						this.flag = true;
					}.bind(this))
				
			}

		},
		components: {
			headerBack
		}
	}
</script>
<style lang="scss" scoped>
	.card-movie-detail {
		margin-top: 72px;
		padding:0 20px;

	}
	.md-subheading{
	display:flex;
	justify-content:center;
	flex-wrap:nowrap
	}

</style>