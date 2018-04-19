<template>
  <div id="book">
<h2>{{book.title}}</h2>
<h5>{{book.author}}</h5>
<p v-for='item in book.content'>{{item}}</p>
      <md-button class="md-raised md-primary" @click="random" v-show="visibile">换一篇</md-button>
       <md-progress-spinner :md-size="60" md-mode="indeterminate" v-show="flag"></md-progress-spinner>
  </div>

</template>
<script>
  import axios from "axios"
  export default {
    data() {
      return {
        book:{},
        flag: true,
        visibile:false
      }
    },
    computed: {
    },
    mounted: function() {
      this.today()
    },
    methods: {
      today: function() {
        axios.get(API_PROXY + 'https://interface.meiriyiwen.com/article/today?dev=1')
          .then(function(res) {
            this.book = res.data.data;
            let p=res.data.data.content.replace(/<p>/g,'');
            let content=p.replace(/<\/p>/g,'\n');
            this.book.content=content.split('\n');
            this.flag = false;
            this.visibile = true;
          }.bind(this))
          .catch(function(error) {
            console.log(error);
          });
      },
      random:function(){
      this.flag = true;
              axios.get(API_PROXY + 'https://interface.meiriyiwen.com/article/random?dev=1')
          .then(function(res) {
            this.book = res.data.data;
            let p=res.data.data.content.replace(/<p>/g,'');
            let content=p.replace(/<\/p>/g,'\n');
            this.book.content=content.split('\n');
            this.flag = false;
          }.bind(this))
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
</script>
<style scoped lang="scss">
  #book {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 64px 0;
    text-align: center;
    p{
    text-align:left;
    text-indent:2em

    }
  }

</style>



