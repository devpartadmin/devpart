<template>
  <div style="position: relative;background-color: rgba(234,237,234,0.66);height: 100% ;" class="flex flex-v" >
    <mt-header class="header-title" title="消息中心" style="color:black;font-size: 15px;">
      <router-link to="/" slot="left">
        <mt-button  class="iconfont icon-iconfront-4 header-icon"></mt-button>
      </router-link>
      <shop-car-components :count="30"  slot="right"></shop-car-components>
    </mt-header>

    <div style="overflow: auto">
      <div class="flex animated zoomIn info-border" v-for="item in items">
        <span class="iconfont icon-child flex-1" style="font-size: 40px;color: red;"></span>
        <span class="info-icon">{{item.info}}</span>
      </div>
    </div>

    <div style="position: absolute;font-size: 30px;color:#666666;bottom: 10px;left:45%" class="iconfont icon-delete" @click="del"></div>

  </div>
</template>

<script>
  import ShopCarComponents from "@/views/ShopCarComponents"
  export default {
    components: {
      ShopCarComponents
    },
    data(){
      return{
         items:[
           {id:"1",info:"小萨今日上新啦！小伙伴们快去看看吧!"},
           {id:"2",info:"小萨明日采购上新！小伙伴们有什么需要的赶紧去标记吧!"},
           {id:"3",info:"小萨今日上新啦！小伙伴们快去看看吧!"},
           {id:"4",info:"小萨今日上新啦！小伙伴们快去看看吧!"},
           {id:"5",info:"小萨今日上新啦！小伙伴们快去看看吧!"},
           {id:"6",info:"小萨今日上新啦！小伙伴们快去看看吧!"},
           {id:"7",info:"小萨今日上新啦！小伙伴们快去看看吧!"},
         ]
      }
    },
    methods:{
      del(){
        this.items=[];
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
  .info-border{
    background-color: white;
    border-radius: 8px;
    margin-top:10px;
    width:90%;
    margin-left: 18px;
    min-height: 50px;
    text-align: center;
    display:inline-block;
  }
  .info-icon{
    font-size: 15px;
    color:#666666;
  }
</style>