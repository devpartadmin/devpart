<template>
  <div>
    <div style="margin-top: 10px; flex-direction: row" class="flex wrap">
      <div style="width: 100%;margin-top: 40px" class="flex-1" v-for="item in foodsItems">
        <div style="width: 100%;text-align: center"><img width="120" :src="'./static/image/乐事薯片.jpg'"  /></div>
        <div class="list">{{item.title}}</div>
        <div class="much">￥{{item.much}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        foodsItems:[
          {id:1,title:"乐事薯片",much:"3.5"},
          {id:2,title:"乐事薯片",much:"3.5"},
          {id:3,title:"乐事薯片",much:"3.5"},
          {id:4,title:"乐事薯片",much:"3.5"},
          {id:5,title:"乐事薯片",much:"3.5"},
          {id:6,title:"乐事薯片",much:"3.5"},
          {id:7,title:"乐事薯片",much:"3.5"},
          {id:8,title:"乐事薯片",much:"3.5"},
          {id:9,title:"乐事薯片",much:"3.5"},
          {id:10,title:"乐事薯片",much:"3.5"},
          {id:15,title:"乐事薯片",much:"3.5"},
          {id:26,title:"乐事薯片",much:"3.5"},
        ],
      };
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
</style>