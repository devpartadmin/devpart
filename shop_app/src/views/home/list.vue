<template>
  <div style="background-color: rgba(234,237,234,0.66);height: 100% ; position: relative" class="flex flex-v">

    <mt-header class="header-title">
      <router-link to="/" slot="left">
      <mt-button  class="iconfont icon-iconfront-4 header-icon"></mt-button>
      </router-link>
    </mt-header>

    <div style="width:100%;height:100px;position: absolute;" class="flex" >
      <div style="width:30px"></div>
      <div class="flex-1"  >
        <mt-search style="height:100px;width:100%; " v-model="search_keys" cancel-text="取消"  placeholder="搜索"/>

      </div>
    </div>

      <!--<mt-header class="header-title">-->
        <!--<router-link to="/" slot="left">-->
          <!--<mt-button  class="iconfont icon-iconfront-4 header-icon"></mt-button>-->
        <!--</router-link>-->
      <!--</mt-header>-->

      <div style="text-align: center;font-size: 14px;margin-top: 3px;">
        <span >全部</span>
        <span style="margin-left: 30px">销量</span>
        <span style="margin-left: 30px">价格</span>
        <span style="margin-left: 30px">特惠</span>
        <span style="margin-left: 30px">视频</span>
      </div>

      <div v-masonry transition-duration="0.0s" item-selector=".item"  class="flex-1" style="overflow: auto">
        <div v-masonry-tile class="item animated zoomIn"  v-for="(item, index) in imgsArr" >
          <!--<div>-->
            <!--index={{index}}-->
          <!--</div>-->
          <img style="width: 100%;border-radius: 8px" :src="item.src" alt="" @click="show_details(item.id)" />
          <div class="list">{{item.info}}</div>
          <div class="much">￥{{item.much}}</div>
        </div>
        <div class="item">
          <mt-button size="large" type="danger" @click="fetchImgsData">LOAD MORE</mt-button >
        </div>
      </div>

    <mt-popup  v-model="dialogVisible"  popup-transition="popup-fade" class="details_dialog">
      <detailes-dialog v-if="dialogVisible" :id="product_id"></detailes-dialog>
    </mt-popup>
  </div>

</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import DetailesDialog from '@/views/SystemHome/DetailsDialog'

  export default {
    components: {
      Waterfall,
      WaterfallSlot,vueWaterfallEasy,DetailesDialog
    },
    created() {
      this.imgsArr = this.initImgsArr(0,12)
      this.fetchImgsArr = this.initImgsArr(0, 12) // 模拟每次请求的新的图片的数据数据
    },
    data(){
      return {
        search_keys:'',
        dialogVisible:false,
        product_id:null,
        items:[
          {id: 1, src: './static/image/乐事薯片.jpg', info:'欢迎使用Vue.js 2.6',much:'4'},
          {id: 2, src: './static/image/水果.jpg', info:'暗中观察',much:'4'},
          {id: 3, src: './static/image/牛肉粒.jpg', info:'Michelangelo is a party dude.',much:'4'},
          {id: 4, src: './static/image/香鱼片.jpg', info:'We are Teenage Mutant Ninja Turtles!',much:'4'},
          {id: 5, src: './static/image/水果.jpg', info:'I have got out of this game for a lot of years.',much:'4'},
          {id: 6, src: './static/image/乐事薯片.jpg', info:'看好你哟',much:'4'},
          {id: 7, src: './static/image/牛肉粒.jpg', info:'这个需求很简单，怎么实现我不管。哪种语言你随便，不服可以找老板。横批：明天上线。',much:'4'},
          {id: 8, src: './static/image/乐事薯片.jpg', info:'We are Teenage Mutant Ninja Brothers!',much:'4'},
          {id: 9, src: './static/image/水果.jpg', info:'多线程编程 - 理论与实践',much:'4'},
          {id: 10, src: './static/image/乐事薯片.jpg', info:'ipanda',much:'4'},
          {id: 11, src: './static/image/牛肉粒.jpg', info:'欢迎学习MongoDB',much:'4'},
          {id: 12, src: './static/image/水果.jpg', info:'panda',much:'4'},
        ],
        imgsArr: [],
        fetchImgsArr: [],
      }
    },
    methods:{
      // 假数据
      initImgsArr(n, m) { //num 图片数量
        var arr = []
        for (var i = n; i < m; i++) {
          arr.push(this.items[i]);
        }
        return arr
      },

      fetchImgsData() {
        console.log('fetching...')
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      },

      upLoadTicket(index){ //投票按钮
        console.log(index);
      },
      //显示详情
      show_details(id){
        this.dialogVisible=true;
        this.product_id=id;
      }
    },
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

  .item {
    margin-left: 10px;
    margin-bottom: 10px;
    width: 170px;
    background-color: white;
    border-radius: 8px;
  }
  .masonry-container {
    width: 55%;
    margin: 0 auto;
  }

  .item {
    animation-duration: 0.5s;
    /*animation-delay: 2s;*/
    /*animation-iteration-count: infinite;*/
  }

  >>>.mint-searchbar{
    background-color: transparent;
  }
  /*>>>.mint-searchbar-core{*/
    /*width:90%;*/
  /*}*/
  >>>.mint-searchbar-inner{
    height: 25px;
    /*width: 75%;*/
    /*border-radius: 18px;*/
    /*margin-left: 60px;*/
    padding:0px;
    /*flex:0.8;*/
  }

  >>>.mint-searchbar-cancel {
    color: #a2fc3e;
  }

</style>
