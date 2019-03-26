<template>
  <div style="position: relative">
    <!--<mt-button class="iconfont icon-xingzhuanggongnengtubiao- header-icon" style="position: relative"></mt-button>-->
    <mt-badge type="error" size="small" style="position: absolute;margin-right: 3px">{{count}}</mt-badge>
  </div>
</template>

<script>
  export default {
    props:{
      count:String,
    },

    data(){
      return{

      }
    },
    methods:{

    },
  }
</script>

<style scoped>
  .header-icon {
    font-size: 25px;
    color: coral;
  }

</style>