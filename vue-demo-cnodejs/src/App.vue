<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import home from './views/home/home.vue'
  export default {
    name: 'app',
    data() {
      return {
    }
    },
    created:function(){
    window.addEventListener('hashchange', function() {
            //为当前导航页附加一个tag
            this.history.replaceState('hasHash', '', '');
            localStorage.removeItem("index");
            localStorage.removeItem("indexs");
            localStorage.removeItem("list");

        }, false);

        history.pushState(1, '', '')
        window.onpopstate = function(e) {
          console.log(e, e.state)
            if (!e.state) {
              //侦测是用户触发的后退操作, dosomething
              //这里刷新当前url
              window.location.reload();
            }
        };
  
  }
  }
</script>

<style lang="scss">
    ::-webkit-scrollbar{
  display:none !important;
}
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

.md-progress-spinner{
    margin:auto;    
    z-index:99999
}
  }
</style>
