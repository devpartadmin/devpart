<template>
  <div style="background-color: rgba(234,237,234,0.66);height: 100% ;overflow: auto" >


    <header-index :search_keys="search_keys"></header-index>

    <p class="title"> 热门搜索 </p>

    <div   v-for="item in items " v-model="search_keys" style="display: inline-block;" class="animated zoomIn">
      <div class="hot-search">{{item.hot_name}}</div>
    </div>

    <div>
       <p class="title"> 历史纪录 <span style="font-size: 18px;right: 3px" class="iconfont icon-delete" @click="del"></span></p>
    </div>

    <div style="">
      <div   v-for="item in historyItems " v-model="search_keys" style="display: inline-block;" class="animated zoomIn">
        <div class="hot-search">{{item.hot_name}}</div>
      </div>
    </div>





  </div>
</template>

<script>
  import HeaderIndex from "@/views/SystemHome/HeaderIndex"
  export default {
    components: {
      HeaderIndex
    },
    data(){
      return{
         search_keys:'',
        items:[
          {id:"1",hot_name:"坚果"},
          {id:"2",hot_name:"雪碧"},
          {id:"3",hot_name:"可口可乐"},
          {id:"4",hot_name:"七喜"},
          {id:"5",hot_name:"薯片"},
          {id:"6",hot_name:"卫龙"},
          {id:"7",hot_name:"烤馍片"},
        ],
        historyItems:[
          {id:"1",hot_name:"坚果"},
          {id:"2",hot_name:"雪碧"},
          {id:"3",hot_name:"可口可乐"},
          {id:"4",hot_name:"七喜"},
          {id:"5",hot_name:"薯片"},
          {id:"6",hot_name:"卫龙"},
          {id:"7",hot_name:"烤馍片"},
        ],
      }
    },
    methods:{
      del(){
        this.historyItems = [];
      }
    }
  }
</script>

<style scoped>
  .title{
    font-size: 10px;
    color:#666666;
    margin-left: 8px;
  }
  .hot-search{
    /*background-color: #f5f3f3;*/
    background-color: white;
    font-size: 12px;
    color:#666666;
    border-radius: 8px;
    text-align: center;
    line-height: 30px;
    min-width:60px;
    height: 30px;
    margin-left: 10px;
    margin-top: 10px;
  }

</style>