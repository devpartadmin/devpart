<template>
  <div style="position: relative" class="flex flex-v" >
    <mt-header class="header-title">
      <router-link to="/" slot="left">
        <mt-button  class="iconfont icon-iconfront-4 header-icon"></mt-button>
      </router-link>
      <shop-car-components :count="30"  slot="right"></shop-car-components>
    </mt-header>

    <div style="width:100%;height:39px;position: absolute;pointer-events :none" class="flex"  >
      <div style="width:40px;"></div>
      <div class="flex-1" style="pointer-events :auto">
        <mt-search style="height:39px;width:100%;" v-model="search_keys" cancel-text="取消"  placeholder="搜索"/>
      </div>
      <div style="width:40px;"></div>
    </div>
  </div>
</template>

<script>
  import ShopCarComponents from "@/views/ShopCarComponents"
  export default {
    props:{
      search_keys: {},
    },
    components: {
      ShopCarComponents
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  >>>.mint-header{
    background-color: rgba(205,208,205,0.66);
  }
  .header-title{
    font-size: 20px;
    color:black;
  }
  >>>.mint-searchbar{
    background-color: transparent;
  }
  >>>.mint-searchbar-core{
    border-radius: 18px
  }
  >>>.mint-searchbar-inner{
    height: 25px;
    /*width: 75%;*/
    border-radius: 18px;
    /*margin-left: 60px;*/
    padding:0px;
    /*flex:0.8;*/
  }
  >>>.mint-searchbar-cancel {
    color: #888;
    font-size: 15px;
  }
  .mint-search>>> .mint-search-list {
    display:none;
  }
  >>>.mint-header{
    background-color: #eaeaea;
  }
  >>>.mint-tab-item-label{
    font-size: 15px;
    line-height: 0.5px;
  }
  >>>.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #2ab795;
    color: #2ab795;
  }

</style>