<template>
  <div style="position: relative;background-color: rgba(234,237,234,0.66);height: 100% ;" class="flex flex-v" >
    <mt-header class="header-title" title="购物车" style="color:black;font-size: 15px;">
      <router-link to="/" slot="left">
        <mt-button  class="iconfont icon-iconfront-4 header-icon"></mt-button>
      </router-link>
      <span  slot="right" style="color: #2ab795;font-size: 16px;">编辑</span>
    </mt-header>

    <div style="overflow: auto;height: 80%;">
      <div style="background-color: white;border-radius: 8px;margin-top:10px;width:90%;margin-left: 18px;" class="flex" v-for="item in items">
        <div class="flex-1"><img height="55" :src="item.src" style="border-radius: 8px;"/></div>
        <div class="flex-1">
          <div class="info">{{item.name}}</div>
          <div class="info">{{item.taste}}</div>
          <div class="info" style="color: red">￥{{item.much}}</div>
        </div>
        <div class=" flex flex-1" style="margin-top: 30px;line-height: 28px">
          <span class="flex-1 iconfont icon-iconfront-6"></span>
          <span class="flex-1"><input v-model="pageCount" style="width: 50%;text-align: center;border: 0"/></span>
          <span class="flex-1 iconfont icon-iconfront-7"></span>
        </div>
      </div>
    </div>

    <div style="background-color: white;height: 70px;width: 100%;margin-top: 55px;border-radius: 8px;">


    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        pageCount:6,
        items:[
          {id:"1",name:"水果缤纷",taste:"甜",much:"15",src:"./static/image/水果.jpg"},
          {id:"2",name:"薯片",taste:"麻辣",much:"15",src:"./static/image/水果.jpg"},
          {id:"3",name:"可乐",taste:"",much:"15",src:"./static/image/水果.jpg"},
          {id:"4",name:"卫龙",taste:"",much:"15",src:"./static/image/水果.jpg"},
          {id:"5",name:"蚕豆",taste:"五香",much:"15",src:"./static/image/水果.jpg"},
          {id:"6",name:"烤馍片",taste:"孜然",much:"15",src:"./static/image/水果.jpg"},
          {id:"7",name:"牛肉粒",taste:"孜然",much:"15",src:"./static/image/水果.jpg"},
          {id:"8",name:"香鱼片",taste:"",much:"15",src:"./static/image/水果.jpg"},
          {id:"9",name:"可口可乐",taste:"",much:"15",src:"./static/image/水果.jpg"},
          {id:"10",name:"百事可乐",taste:"",much:"15",src:"./static/image/水果.jpg"},
        ],
      }
    }
  }
</script>

<style scoped>
  .header-title{
    font-size: 24px;
    color:black;
  }
  >>>.mint-header{
    background-color: #eaeaea;
  }
  .info{
    font-size: 13px;
    color:#666666;
    margin-top: 3px;
  }
</style>