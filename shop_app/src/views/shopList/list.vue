<template>
  <div ref="scroll_container">

    <div v-masonry transition-duration="0.0s" item-selector=".item"  class="flex-1" style="overflow: auto;margin-top:10px;"  >
      <div v-masonry-tile class="item animated zoomIn"  v-for="(item, index) in imgsArr" >
        <!--<div>-->
        <!--index={{index}}-->
        <!--</div>-->
        <img style="width: 100%;border-radius: 8px" :src="item.src" alt="" @click="show_details(item.id)" />
        <div class="list">{{item.info}}</div>
        <div class="much">￥{{item.much}}</div>
      </div>
      <!--<div class="item">-->
      <!--<mt-button size="large" type="danger" @click="fetchImgsData">LOAD MORE</mt-button >-->
      <!--</div>-->
    </div>
    <div style="margin-left: 150px;">
      <mt-spinner type="fading-circle" v-if="loading" :size="50" color="#2ab795"></mt-spinner>
    </div>



    <mt-popup  v-model="dialogVisible"  popup-transition="popup-fade" class="details_dialog" :modal="true">
      <detailes-dialog v-if="dialogVisible" :id="product_id" @close="dialogVisible = false"></detailes-dialog>
    </mt-popup>

  </div>
</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import DetailesDialog from '@/views/SystemHome/DetailsDialog'
  import axios from 'axios'
  import throttle from 'lodash/throttle'

  const imageService = {
    findImages() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          axios.get('./static/mockdata/images.json').then(resolve, reject);
        }, 1600);
      });
    },
  };


  export default {
    components: {
      Waterfall,
      WaterfallSlot,vueWaterfallEasy,DetailesDialog
    },
    props:{
      selected: {},
    },
    data(){
      return {
        search_keys:'',
        dialogVisible:false,
        product_id:null,
        imgsArr: [],
        fetchImgsArr: [],
        loading: false,
      }
    },
    methods:{
      // 假数据
      // initImgsArr(n, m) { //num 图片数量
      //   var arr = []
      //   for (var i = n; i < m; i++) {
      //     arr.push(this.items[i]);
      //   }
      //   return arr
      // },

      fetchImgsData() {
        console.log('fetching...');

        this.loading = true;

        return imageService.findImages().then(({data}) => {
          this.imgsArr = this.imgsArr.concat(data.records);
        }).finally(() => { this.loading = false; });

      },

      throttleFetchImgsData: throttle(function() {
        if (!this.loading) {
          this.fetchImgsData();
        }
      }, 600),

      upLoadTicket(index){ //投票按钮
        console.log(index);
      },

      /**
       * 是否到底
       * @returns {boolean}
       */
      isReachBottom() {
        let element = this.$refs.scroll_container;
        return element.scrollHeight - (element.clientHeight +  element.scrollTop) < 200;
      },

      updateScrollBtn (evt) {
        // let element = evt.target;
        // let isReachBottom = element.scrollHeight - (element.clientHeight +  element.scrollTop) < 200;

        if (this.isReachBottom()) {
          // console.log("Reach bottom!");
          this.throttleFetchImgsData();
        }
        // console.log('updateScrollBtn', {target:evt.target});
        // console.log('updateScrollBtn', evt.target.scrollTop);
      },

      //显示详情
      show_details(id){
        this.dialogVisible=true;
        this.product_id=id;
      },
    },
    mounted() {
      this.fetchImgsData();
      this.$refs.scroll_container.addEventListener('scroll', this.updateScrollBtn, false);
    },
    beforeDestroy() {
      this.$refs.scroll_container.removeEventListener('scroll', this.updateScrollBtn);
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
  >>>.mint-searchbar-core{
    width:90%;
  }
  >>>.mint-searchbar-inner{
    height: 25px;
    /*width: 75%;*/
    border-radius: 18px;
    /*margin-left: 60px;*/
    padding:0px;
    flex:0.8;
  }
  >>>.mint-searchbar-cancel {
    color: #888;
    font-size: 15px;
  }
  .mint-search>>> .mint-search-list {
    display:none;
  }
  >>>.mint-header{
    background-color: #eaeaea;
  }
  .kind_title{
    margin-left: 30px;
    color:gray;
  }
  .shop_car{
    font-size: 26px;
    color: coral;
  }
</style>