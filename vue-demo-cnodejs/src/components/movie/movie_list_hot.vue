<template>
  <div id="movielist-hot" class="j-container">
    <div class="j-content">
    
      <ul>
        <li v-for="movie in movieLists" @click="getMovieDetail(movie.id)">
<div class="image">
            <img :src="movie.images.large" alt="People">
</div>
          <div class="md-list-text-container">
            <span>{{movie.title}}</span>
            <p><span v-for="genre in movie.genres">{{genre}}</span>({{movie.year}})(平均{{movie.rating.average}}分)</p>
          </div>

            <div><i class="iconfont icon-chakan"></i></div>

        </li>
      </ul>
        <md-progress-spinner :md-size="60" md-mode="indeterminate" v-show="spinnerFlag"></md-progress-spinner>
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    data() {
      return {
        scrContainer: null,
        scrContent: null,
        spinnerFlag: true,
        movieLists: [],
        busy: false
      }
    },

    mounted: function() {
      this.scrContainer = this.$el;
      this.scrContent = this.$el.querySelector(".j-content")
      this.eleH = this.scrContent.offsetHeight;
      console.log(this.loadMore());
      this.scrContainer.addEventListener('scroll', function(e) {
          this.loadMore();
      }.bind(this))
    },
    methods: {
      getMovieDetail(id) {
        this.$router.push({
          name: 'movie-detail',
          params: {
            id: id
          }
        })
      },
      loadMore: function() {
        if (this.busy) {
          return;
        }
        var start = this.movieLists.length;
        this.busy = true;
        this.spinnerFlag = true;
        axios.get(API_PROXY + 'https://api.douban.com/v2/movie/in_theaters?count=10&start=' + start)
          .then(function(res) {
            console.log(res);
            res.data.subjects.forEach(movie => {
              this.movieLists.push(movie);
            })
            this.busy = false;
            this.spinnerFlag = false;
          }.bind(this))
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
</script>
<style scoped lang="scss">
  .j-container {
    text-align: center;
    height: 77vh;
    overflow-y: scroll
  }
  .j-content {
    height: 80vh;
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
     heigth:40px
     }
     }
 }


</style>



