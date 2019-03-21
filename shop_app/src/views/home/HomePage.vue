<template>
  <div style="height: 100%">
    <div>
      <mt-swipe :auto="3000" style="height: 200px;">
        <mt-swipe-item >1</mt-swipe-item>
        <mt-swipe-item >2</mt-swipe-item>
        <mt-swipe-item >3</mt-swipe-item>
      </mt-swipe>
    </div>

    <div>
      <div  class="flex flex-v" style="height: 70px;text-align: center " >
        <div  class="flex flex-1" style="height:50px;" >
          <div  class="flex-1 iconfont icon-mayi-huodong header-icon"></div>
          <div  class="flex-1 iconfont icon-mayi-huodong header-icon"></div>
          <div  class="flex-1 iconfont icon-mayi-huodong header-icon"></div>
          <div  class="flex-1 iconfont icon-mayi-huodong header-icon"></div>
        </div>
        <div  class="flex flex-1" style="height: 20px;">
          <div class="flex-1">话题</div>
          <div class="flex-1">优选</div>
          <div class="flex-1">特惠</div>
          <div class="flex-1">活动2</div>
        </div>
     </div>



      <title-components :title="'零食铺子'">
        <span slot="right">
          更多推荐 <span class="iconfont icon-course"></span>
        </span>
      </title-components>

      <div style="margin-top: 10px; flex-direction: row" class="flex wrap">
        <div style="margin-left: 30px;margin-top: 40px" class="flex-1" v-for="item in foodsItems">
          <div><img height="70" :src="'./static/image/乐事薯片.jpg'"  /></div>
          <div class="list">{{item.title}}</div>
          <div class="much">￥{{item.much}}</div>
        </div>
      </div>

      <title-components :title="'人气推荐'">
        <span slot="right">
          更多推荐 <span class="iconfont icon-course"></span>
        </span>
      </title-components>

      <div style="margin-top: 10px; flex-direction: row" class="flex wrap">
        <div style="margin-left: 30px;margin-top: 40px" class="flex-1" v-for="item in foodsItems">
          <div><img height="70" :src="'./static/image/乐事薯片.jpg'"  /></div>
          <div class="list">{{item.title}}</div>
          <div class="much">￥{{item.much}}</div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
  import LumpComponents from "@/views/SystemHome/LumpComponents";
  import TitleComponents from  "@/views/home/TitleComponents"
  export default {
    components: {LumpComponents,TitleComponents},
    data(){
      return{
         items:[],
        foodsItems:[
          {id:1,title:"乐事薯片",much:"3.5"},
          {id:2,title:"乐事薯片",much:"3.5"},
          {id:3,title:"乐事薯片",much:"3.5"},
          {id:4,title:"乐事薯片",much:"3.5"},
          {id:5,title:"乐事薯片",much:"3.5"},
          {id:6,title:"乐事薯片",much:"3.5"},
        ],
      }
    }
  }
</script>

<style scoped>
  >>>.mint-swipe-items-wrap{
    background-color: #e7e1cd;
  }
  .header-icon {
    font-size: 25px;
    color: coral;
  }
  .list{
    margin-left: 9px;
    color:dimgray;
    font-size: 14px;
  }
  .much{
    margin-left: 20px;
    color:darkgray;
    font-size: 10px;
    font-weight:bold;
  }
  hr{
    border-color: lightgray;
    border-top: 0px;
  }
</style>