<template>
  <div style="background-color: rgba(234,237,234,0.66);height: 100% ; " class="flex flex-v">

    <header-index :search_keys="search_keys"></header-index>

    <mt-navbar v-model="selected" style="border-bottom: #ccc solid 1px;border-top: #ccc solid 1px;color: #666666;height:39px;">
      <mt-tab-item id="all">全部</mt-tab-item>
      <mt-tab-item id="sales_volume">销量</mt-tab-item>
      <mt-tab-item id="price">价格</mt-tab-item>
      <mt-tab-item id="discounts">特惠</mt-tab-item>
      <mt-tab-item id="filtrate">筛选</mt-tab-item>
    </mt-navbar>

    <shop-list class="flex-1" style="overflow: auto" :selected="selected"/>

  </div>

</template>

<script>
  import ShopList from "@/views/shopList/list"
  import HeaderIndex from "@/views/SystemHome/HeaderIndex"
  import ShopCarComponents from "@/views/ShopCarComponents"
  export default {
    components: {
      ShopCarComponents,ShopList,HeaderIndex
    },
    created() {

    },
    data(){
      return {
        search_keys:'',
        selected:'all',
        dialogVisible:false,
      }
    },
    methods:{

    },
  }
</script>

<style scoped>
  >>>.mint-header{
    background-color: rgba(205,208,205,0.66);
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
