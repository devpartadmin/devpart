<template>
  <div>
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

     <div class="" style="margin-top: 30px">
       <div><span style="margin-left: 5%;font-size: 15px">零食铺子</span>
            <span style="margin-left: 55%;font-size: 13px;color: #969896">更多推荐
              <span class="iconfont icon-course"></span>
            </span></div>

      </div>

      <div>



      </div>


    </div>
  </div>
</template>

<script>
  import LumpComponents from "@/views/SystemHome/LumpComponents";
  export default {
    components: {LumpComponents},
    data(){
      return{
         items:[],
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
    color: darkgreen;
  }
</style>