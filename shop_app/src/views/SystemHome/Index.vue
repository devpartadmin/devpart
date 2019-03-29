<template>
  <div class="flex flex-v" style="height:100%">
    <mt-header title="Wow商城" style="color:black;font-size: 15px;position: relative">
      <span  slot="left" style="position: relative" @click="$router.push({name:'NewsManagement'})">
         <mt-button slot="left" style="font-weight: bold;" class="iconfont icon-iconfront- header-icon" ></mt-button>
         <div class="badge-icon" style="position: absolute"></div>
      </span>

      <shop-car-components :count="30"  slot="right"></shop-car-components>
      <mt-button class="iconfont icon-shouye_sousuo header-icon" slot="right" @click="$router.push({name:'HomePageIndexSearch'})"></mt-button>
    </mt-header>

    <router-view class="flex-1" style="margin-bottom: 50px;overflow: auto"></router-view>

    <mt-tabbar @input="switchNewTab" v-model="selected" style="color: #666666">
      <mt-tab-item id="首页">
        <div class="iconfont icon-shouye1"></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="订单" >
        <div class="iconfont icon-zongheguanli"></div>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现" >
        <div class="iconfont icon-shouye1 "></div>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <div class="iconfont icon-gerenzhanghaoguanli"></div>
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
        selected: "首页",
      }
    },
    methods:{
      switchNewTab(tabName) {
        console.log('switchNewTab' , tabName)
        switch (tabName) {
          case '首页': this.$router.push({name: 'HomePageIndex'});break;
          case '订单': this.$router.push({name: 'IndentIndex'});break;
          case '发现': this.$router.push({name: 'HomePageIndex'});break;
          case '我的': this.$router.push({name: 'CenterIndex'});break;
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
    color:#2ab795;
  }
  >>>.mint-header{
    background-color: #eaeaea;
  }
  >>>.mint-tabbar > .mint-tab-item.is-selected {
    color: #2ab795;
  }
  .badge-icon {
    right: 1px;
    top: -9px;
    z-index: 1;
    transform: scale(0.8);
    font-size: 8px;
    width:9px;
    height: 9px;
    border-radius: 10px;
    background-color: red;
  }
</style>