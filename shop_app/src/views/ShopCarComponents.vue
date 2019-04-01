<template>
  <span style="position: relative;font-size: 15px;" @click="$router.push({name:'HomePageIndexCarPage'})">
    <mt-badge class="badge-icon" type="error" size="small" style="position: absolute">{{cart_count}}</mt-badge>
    <mt-button class="iconfont icon-xingzhuanggongnengtubiao- header-icon"></mt-button>
  </span>
</template>

<script>

  import {mapState,mapGetters,mapActions} from 'vuex';

  export default {
    // props:{
    //   count:Number,
    // },
    computed: {
      ...mapState('shopcart', ['cart_count']),
    },
    data(){
      return{

      }
    },
    methods:{
      // showShopcart() {
      //   alert('showShopcart !')
      // }
    },
  }
</script>

<style scoped>
  .header-icon {
    font-size: 25px;
    color: #2ab795;
    font-weight: bolder;
  }
  .badge-icon {
    right: -7px;
    top: -12px;
    z-index: 1;
    transform: scale(0.8);
  }

</style>