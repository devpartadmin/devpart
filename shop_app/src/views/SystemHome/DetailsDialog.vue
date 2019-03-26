<template>
   <div style="position: relative">
     <div style="position: absolute;font-size: 30px;color:black;right: 3px" class="iconfont icon-Icon_close" ></div>
     <br/>
     <div >
       <img width="300" :src="'./static/image/乐事薯片.jpg'"  />
       <p style="margin-top: 1px;font-size:15px;color: #404040">乐事薯片</p>
       <p style="margin-top: -10px;color: #404040">￥33</p>
     </div>
     <div class="">
       <p style="color:gray;font-size: 15px">口味</p>
       <mt-button class="button" >麻辣</mt-button>
       <mt-button class="button">孜然</mt-button>
       <mt-button class="button">五香</mt-button>
       <mt-button class="button">黄瓜</mt-button>
     </div>
     <div style="width:100%;margin-top: 30px">
       <span class="iconfont icon-Icon_add_circle count_icon"></span>

       <span class="iconfont icon-round-remove_circle- count_icon-2"></span>
     </div>
     <div style="margin-top: 15px;">
       <mt-button style="border-radius: 18px;width:40%;background-color: #2ab795;color:white;font-size: 15px">加入购物车</mt-button>
       <mt-button style="border-radius: 18px;margin-left: 30px;width:40%;background-color:#fd994b;color:white;font-size: 15px">立即购买</mt-button>
     </div>
   </div>
</template>

<script>
  export default {
    props:{
      id:{},
    },
    mounted(){
      console.log("dialogId",this.id)
    },
    data(){
      return{

      }
    },
    methods:{
      a(){
      }
    }
  }
</script>

<style scoped>
  .button{
    height: 30px;
    width: 60px;
    font-size: 13px;
    border: 1px solid grey;
    margin-left: 8px;
    margin-bottom: 8px;
  }
  .count_icon{
    font-size: 25px;
    color: #2ab795;
  }
  .count_icon-2{
    font-size: 30px;
    color: #2ab795;
    margin-left: 150px;
  }
  >>>.mint-button{
    height:35px;
  }
</style>