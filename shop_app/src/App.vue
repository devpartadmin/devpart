<template>
  <div id="app" style="height:100%">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/
/*#nav {*/
  /*padding: 30px;*/
  /*a {*/
    /*font-weight: bold;*/
    /*color: #2c3e50;*/
    /*&.router-link-exact-active {*/
      /*color: #42b983;*/
    /*}*/
  /*}*/
/*}*/
</style>

<script>
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
  export default {
    methods : {
      ...mapActions('shopcart', ['init_shopcart']),
    },
    created() {
      this.init_shopcart();
    }
  }
</script>
