<template>
  <div id="photo-detail">
      <transition name="slideT">
        <div class="login-tip" v-show="tipFlag" v-text="tip"></div>
      </transition>
      <headerBack title="photo"></headerBack>
      <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
        <img :src="photo[index]['url']">
      </v-touch>
  </div>
</template>
<script>
  import headerBack from "../common/header_back.vue"
  export default {
    data() {
      return {
        photo:'',
        tip: '',
        tipFlag: false,
        index:''
      }
    },
    created:function(){
    this.local()
    this.loc()
    },
    methods: {
      onSwipeLeft() {
        if (this.index === this.photo.length - 1) {
          this.tip = "这是最后一张图"
          this.tipFlag = true;
          setTimeout(function() {
            this.tipFlag = false;
          }.bind(this), 2000)
          return;
        }
        this.index++;
        localStorage.setItem("indexs",this.index)
      },
      onSwipeRight() {
        if (this.index === 0) {
          this.tip = "这是第一张图"
          this.tipFlag = true;
          setTimeout(function() {
            this.tipFlag = false;
          }.bind(this), 2000)
          return;
        }
        this.index--;
        localStorage.setItem("indexs",this.index)
      },
      local(){
      if(!localStorage.indexs){
      localStorage.setItem("indexs",this.$route.params.index)
      this.index=localStorage.getItem("indexs")
      }
      else{
      this.index=localStorage.getItem("indexs")
      }
      },
      loc(){
        if(!localStorage.photo){
        localStorage.setItem("photo",JSON.stringify(this.$route.params.photo))
      this.photo=JSON.parse(localStorage.getItem("photo"))
      }
      else{
      this.photo=JSON.parse(localStorage.getItem("photo"))
      }
      },
    },
    components: {
      headerBack
    }
  }
</script>
<style scoped lang="scss">
  #photo-detail {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
  }
  #photo-detail img {
    max-width: 100%;
    max-height: 100%;
  }
  .login-tip {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    min-height: 64px;
    line-height: 64px;
    text-align: center;
    background-color: #3f51b5;
    color: #fff;
    z-index:99999999999999999999999999
  }
</style>



