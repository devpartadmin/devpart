<template>
  <div style="height: 100%;background-color: rgba(234,237,234,0.66);position: relative">
    <div>
      <mt-swipe :auto="3000" style="height: 200px;" >
        <mt-swipe-item :key="item.id" v-for="item in images"><img class="swipe-img" :src="item.src"/></mt-swipe-item>
      </mt-swipe>
    </div>

    <div>
      <div  class="flex flex-v" style="height: 70px;text-align: center;background-color: white; " >
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
          <div class="flex-1">活动</div>
        </div>
     </div>


     <div style="background-color: white;">
      <title-components :title="'零食铺子'">
        <span slot="right" @click="$router.push({name:'HomePageIndexFoodsList',params:{more_suggest:0}})">
          更多推荐 <span class="iconfont icon-course"></span>
        </span>
      </title-components>

      <div style="margin-top: 10px; flex-direction: row" class="flex wrap">
        <div style="width: 100%;margin-top: 30px;position: relative;border-radius: 10px;" class="flex-1" v-for="item in foodsItems">
          <div style="border: rgba(234,237,234,0.66) 1px solid;border-radius: 8px" >
          <div class="shang-xin" style="position: absolute">
            上新
          </div>
          <div style="width: 100%;text-align: center;" @click="show_details(item.id)"><img style="border-radius: 8px" width="120" :src="item.src"  /></div>
          <div class="list">{{item.title}}</div>
          <div class="much">￥{{item.much}}</div>
        </div>
        </div>
      </div>
     </div>

      <div style="background-color: white;">
      <title-components :title="'人气推荐'">
        <span slot="right" @click="$router.push({name:'HomePageIndexFoodsList',params:{more_suggest:1}})">
          更多推荐 <span class="iconfont icon-course"></span>
        </span>
      </title-components>

      <div style="margin-top: 10px; flex-direction: row" class="flex wrap">
        <div style="width: 100%;text-align: center;margin-top: 20px;position: relative" class="flex-1" v-for="item in foodsItems">
          <div class="ren-qi" style="position: absolute">
            <mt-badge type="error">￥10</mt-badge>
          </div>
          <div style="width: 100%;text-align: center" @click="show_details(item.id)"><img height="80" :src="item.src"  /></div>
          <div  class="hot_list">{{item.title}}</div>
          <div  class="hot_much">￥{{item.much}}</div>
        </div>
      </div>
      </div>
    </div>

    <mt-popup  v-model="detailDialogState.dialogVisible"  popup-transition="popup-fade" class="details_dialog">
      <detailes-dialog v-if="detailDialogState.dialogVisible" v-bind.sync="detailDialogState" @close="detailDialogState.dialogVisible=false"></detailes-dialog>
    </mt-popup>
  </div>
</template>

<script>
  import LumpComponents from "@/views/SystemHome/LumpComponents";
  import TitleComponents from  "@/views/home/TitleComponents"
  import DetailesDialog from '@/views/SystemHome/DetailsDialog'

  export default {
    components: {LumpComponents,TitleComponents,DetailesDialog},
    data(){
      return{
        items:[],
        detailDialogState: {dialogVisible:false, product_id:null,},
        // detailDialogState: {dialogVisible:true, product_id:2,},
        foodsItems:[
          {id: 1, src: './static/image/乐事薯片.jpg', title:'欢迎使用Vue.js 2.6',much:'4'},
          {id: 2, src: './static/image/水果.jpg', title:'暗中观察',much:'4'},
          {id: 3, src: './static/image/牛肉粒.jpg', title:'Michelangelo is a party dude.',much:'4'},
          {id: 4, src: './static/image/香鱼片.jpg', title:'We are Teenage Mutant Ninja Turtles!',much:'4'},
          {id: 5, src: './static/image/水果.jpg', title:'I have got out of this game for a lot of years.',much:'4'},
          {id: 6, src: './static/image/香鱼片.jpg', title:'We are Teenage Mutant Ninja Turtles!',much:'4'},
        ],
        images:[
          {id:1,src:"./static/image/乐事薯片.jpg"},
          {id:2,src:"./static/image/水果.jpg"},
          {id:3,src:"./static/image/香鱼片.jpg"},
        ],
      }
    },
    mounted(){
      this.foodsItems && this.foodsItems.forEach(f =>{
        f.title = f.title && f.title.length > 8 ? f.title.substring(0,8)+'......' : f.title;
      })
    },
    methods:{
      show_details(id){
        this.detailDialogState = {dialogVisible:true, product_id:id};
      }

    }
  }
</script>

<style scoped>
  img.swipe-img {width: 100%}

  >>>.mint-swipe-items-wrap{
    background-color: white;
  }

  hr{
    border-color: lightgray;
    border-top: 0px;
  }
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
  .shang-xin{
    /*position: relative;*/
    right: 0px;
    top: -30px;
    color: white;
    font-size: 13px;
    background-image: url("../../assets/images/shangxin.png");
    background-size:cover;
    padding:7px;
    /*width: 45px;*/
    /*height: 30px;*/
  }
  .ren-qi{
    right: 15px;
    top: -20px;
  }
  .shop-car{
    font-size: 27px;
    color: orange;
  }
</style>