<template>
  <div style="background-color: rgba(234,237,234,0.66);height: 100%" class="flex flex-v">
    <mt-header title="更多商品" class="header-title">
      <router-link to="/" slot="left">
        <mt-button  class="iconfont icon-iconfront-4 header-icon"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="flex-1" style="overflow: auto">
      <div style="border-radius:8px;display:inline-block; width: 46%;margin: 5px;background-color: white" class="flex-1" v-for="item in foodsItems">
        <div style="width: 100%;text-align: center">
          <img width="100%" style="border-radius:8px;" :src="'./static/image/乐事薯片.jpg'"  />
        </div>
        <div class="list">{{item.title}}</div>
        <div class="much">￥{{item.much}}</div>
        <br>
      </div>
    </div>

    <!--<waterfall :line-gap="100" :watch="foodsItems">-->
      <!--&lt;!&ndash; each component is wrapped by a waterfall slot &ndash;&gt;-->
      <!--<waterfall-slot-->
        <!--style="margin-left: 20px;margin-top: 100px"-->
        <!--v-for="(item, index) in foodsItems"-->
        <!--:width="item.width"-->
        <!--:height="item.height"-->
        <!--:order="index"-->
        <!--:key="item.id"-->
      <!--&gt;-->
        <!--<img width="120" :src="'./static/image/乐事薯片.jpg'"  />-->
      <!--</waterfall-slot>-->
    <!--</waterfall>-->

  </div>

</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  export default {
    components: {
      Waterfall,
      WaterfallSlot
    },
    data(){
      return {
        foodsItems:[
          {id:1,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:2,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:3,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:4,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:5,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:6,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:7,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:8,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:9,title:"乐事薯片",much:"3.5", width:"100", height:"70"},
          {id:10,title:"乐事薯片",much:"3.5",width:"100",height:"70"},
          {id:15,title:"乐事薯片",much:"3.5",width:"100",height:"70"},
          {id:26,title:"乐事薯片",much:"3.5",width:"100",height:"70"},
        ],
      };
    },
    methods:{

    }
  }
</script>

<style scoped>
  .hot_list{
    width: 100%;
    text-align: center;
    color:dimgray;
    font-size: 15px;
  }
  .hot_much{
    width: 100%;
    text-align: center;
    color:darkgray;
    font-size: 13px;
    font-weight:bold;
  }
  >>>.mint-header{
    background-color: rgba(205,208,205,0.66);
  }
  .header-title{
    font-size: 20px;
    color:black;
  }
</style>

<style scoped lang="scss">
  $count: 8;

  @function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
  }

  @function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
  }

  .g-container {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(16, 1fr);
  }

  @for $i from 1 to $count+1 {
    .g-item:nth-child(#{$i}) {
      position: relative;
      background: randomColor();
      margin: 0.5vw;

      &::after {
        content: "#{$i}";
        position: absolute;
        color: #fff;
        font-size: 2vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .g-item {
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1 / 3;
    }
    &:nth-child(2) {
      grid-column: 2;
      grid-row: 1 / 4;
    }
    &:nth-child(3) {
      grid-column: 3;
      grid-row: 1 / 5;
    }
    &:nth-child(4) {
      grid-column: 4;
      grid-row: 1 / 6;
    }
    &:nth-child(5) {
      grid-column: 1;
      grid-row: 3 / 9;
    }
    &:nth-child(6) {
      grid-column: 2;
      grid-row: 4 / 9;
    }
    &:nth-child(7) {
      grid-column: 3;
      grid-row: 5 / 9;
    }
    &:nth-child(8) {
      grid-column: 4;
      grid-row: 6 / 9;
    }
  }

</style>