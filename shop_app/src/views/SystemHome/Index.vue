<template>
  <div class="flex flex-v" style="height:100%">
    <!--<div>-->
    <!--<span class="iconfont icon-shouye_gouwuche"></span>-->
    <!--<span class="iconfont icon-calendar"></span>-->

    <!--</div>-->
    <mt-header>

      <mt-button slot="left" class="iconfont icon-shouye header-icon"></mt-button>
      <mt-button class="iconfont icon-xingzhuanggongnengtubiao- header-icon" slot="right"></mt-button>
      <mt-button class="iconfont icon-shouye_sousuo header-icon" slot="right"></mt-button>

    </mt-header>

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
  export default {
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
</style>