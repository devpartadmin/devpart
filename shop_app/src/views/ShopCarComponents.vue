<template>
  <span style="position: relative;font-size: 15px;" @click="showShopcart">
    <mt-badge class="badge-icon" type="error" size="small" style="position: absolute">{{count}}</mt-badge>
    <mt-button class="iconfont icon-xingzhuanggongnengtubiao- header-icon"></mt-button>
  </span>
</template>

<script>
  export default {
    props:{
      count:Number,
    },

    data(){
      return{

      }
    },
    methods:{
      showShopcart() {
        alert('showShopcart !')
      }
    },
  }
</script>

<style scoped>
  .header-icon {
    font-size: 25px;
    color: coral;
  }
  .badge-icon {
    right: -7px;
    top: -12px;
    z-index: 1;
    transform: scale(0.8);
  }

</style>