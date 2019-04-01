<template>
  <div style="position: relative;background-color: rgba(234,237,234,0.66);height: 100% ;" class="flex flex-v" >
    <mt-header class="header-title" title="购物车" style="color:black;font-size: 15px;">
      <router-link to="/" slot="left">
        <mt-button  class="iconfont icon-iconfront-4 header-icon"></mt-button>
      </router-link>
      <span  slot="right" style="color: #2ab795;font-size: 16px;">编辑</span>
    </mt-header>

    <div style="overflow: auto;" class="flex-1">
      <div style="background-color: white;border-radius: 8px;margin-top:10px;width:90%;margin-left: 18px;" class="flex animated zoomIn" v-for="item in items">
        <div style="margin-top: 14px;">
          <p-check class="p-default p-curve p-thick p-smooth" color="danger-o" v-model="item.checked"></p-check>

          <!--<input type="checkbox" name="colors" id="red" />-->
        </div>
        <div class="flex-1"><img height="55" :src="item.src" style="border-radius: 8px;"/></div>
        <div class="flex-1">
          <div class="info">{{item.label}}</div>
          <div class="info">{{item.taste}}</div>
          <div class="info" style="color: red">￥{{item.much}}</div>
        </div>
        <div class=" flex flex-1" style="margin-top: 30px;line-height: 28px">
          <span class="flex-1 iconfont icon-iconfront-6" @click="item.count+=1"></span>
          <span class="flex-1"><input v-model="item.count" style="width: 50%;text-align: center;border: 0"/></span>
          <span class="flex-1 iconfont icon-iconfront-7"  @click="item.count-=1"></span>
        </div>
      </div>
    </div>

    <div style="background-color: white;border-radius: 8px;line-height: 60px;text-align: center" class="flex">
      <div style="width: 70px">
        <p-check class="p-default p-curve p-thick p-smooth" color="danger-o" v-model="select_all">全选</p-check>
      </div>
      <div class="flex-1">
        <span style="font-size: 16px;color:#666666;">商品总价</span> &nbsp;&nbsp;<span style="color: red">￥{{sum}}</span>
      </div>
      <div class="flex-1" @click="" style="background-color: #2ab795;width: 100px;color: white">去结算</div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      select_all:{
        get() {
          return this.items.filter(it=>it.checked).length === this.items.length;
        },
        set(newVal) {
          this.items.forEach(f=>{
            f.checked = newVal;
          })
        },
      },
      sum(){
        return this.items.filter(f => f.checked).map(m =>m.count * m.much).reduce((sum, curr)=>sum+curr,0)
      }

    },
    data(){
      return{
        pageCount:6,
        selected_value:'',
        selected_activated:'',
        items:[
          {checked:true,  value:"1",label:"水果缤纷",taste:"甜",much:"15",count:5,src:"./static/image/水果.jpg"},
          {checked:false,  value:"2",label:"薯片",taste:"麻辣",much:"15",count:5,src:"./static/image/乐事薯片.jpg"},
          {checked:true,  value:"3",label:"可乐",taste:"",much:"15",count:5,src:"./static/image/水果.jpg"},
          {checked:true,  value:"4",label:"卫龙",taste:"",much:"15",count:5,src:"./static/image/牛肉粒.jpg"},
          {checked:true,  value:"5",label:"蚕豆",taste:"五香",much:"15",count:5,src:"./static/image/乐事薯片.jpg"},
          {checked:true,  value:"6",label:"烤馍片",taste:"孜然",much:"15",count:5,src:"./static/image/水果.jpg"},
          {checked:true,  value:"7",label:"牛肉粒",taste:"孜然",much:"15",count:5,src:"./static/image/牛肉粒.jpg"},
          {checked:true,  value:"8",label:"香鱼片",taste:"",much:"15",count:5,src:"./static/image/香鱼片.jpg"},
          {checked:true,  value:"9",label:"可口可乐",taste:"",much:"15",count:5,src:"./static/image/水果.jpg"},
          {checked:true,  value:"10",label:"百事可乐",taste:"",much:"15",count:5,src:"./static/image/乐事薯片.jpg"},
          {checked:true,  value:"11",label:"可口可乐1",taste:"",much:"15",count:5,src:"./static/image/水果.jpg"},
          {checked:true,  value:"12",label:"百事可乐2",taste:"",much:"15",count:5,src:"./static/image/乐事薯片.jpg"},
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