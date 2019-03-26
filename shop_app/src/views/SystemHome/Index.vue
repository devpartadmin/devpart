<template>
  <div class="flex flex-v" style="height:100%">
    <!--<div>-->
    <!--<span class="iconfont icon-shouye_gouwuche"></span>-->
    <!--<span class="iconfont icon-calendar"></span>-->

    <!--</div>-->
    <mt-header title="Wow商城" style="color:black;font-size: 15px;position: relative">

      <mt-button slot="left" class="iconfont icon-shouye header-icon"></mt-button>
      <!--<shop-car-components :conunt="30"  slot="right"></shop-car-components>-->
      <mt-button class="iconfont icon-xingzhuanggongnengtubiao- header-icon" slot="right"></mt-button>
      <mt-button class="iconfont icon-shouye_sousuo header-icon" slot="right"></mt-button>

    </mt-header>
    <mt-badge type="error" size="small" style="position: absolute;margin-right: 3px">30</mt-badge>

    <router-view class="flex-1" style="margin-bottom: 50px;overflow: auto"></router-view>

    <mt-tabbar @input="switchNewTab" v-model="selected">
      <mt-tab-item id="首页">
        <div class="iconfont icon-shouye1 header-icon"></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <div class="iconfont icon-zongheguanli header-icon"></div>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <div class="iconfont icon-shouye1 header-icon"></div>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <div class="iconfont icon-gerenzhanghaoguanli header-icon"></div>
        我的
      </mt-tab-item>
    </mt-tabbar>


  </div>
</template>

<script>
  import ShopCarComponents from "@/views/ShopCarComponents"

  export default {
    components: {ShopCarComponents},
    component:{ShopCarComponents},
    data() {
      return {
        selected: "",
      }
    },
    methods:{
      switchNewTab(tabName) {
        console.log('switchNewTab' , tabName)
        switch (tabName) {
          case '首页': this.$router.push({name: 'HomePageIndex'});break;
          case '订单': this.$router.push({name: 'IndentIndex'});break;
          case '发现': this.$router.push({name: ''});break;
          case '我的': this.$router.push({name: ''});break;
          default:
            console.error('未知的tab');
        }
      },
    },

  }
</script>

<style scoped>
  .header-icon {
    font-size: 25px;
    color: coral;
  }
  >>>.mint-header{
    background-color: #eaeaea;
  }
</style>