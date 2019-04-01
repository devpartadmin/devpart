<template>
   <div style="position: relative">
     <div style="position: absolute;font-size: 30px;color:black;right: 3px" class="iconfont icon-Icon_close" @click="$emit('close')"></div>
     <br/>
     <div >
       <img width="300" :src="'./static/image/乐事薯片.jpg'"  />
       <p style="margin-top: 1px;font-size:15px;color: #404040">乐事薯片</p>
       <p style="margin-top: -10px;color: #404040">￥33</p>
     </div>
     <div class="">
       <p style="color:gray;font-size: 15px">口味</p>
       <mt-button :key="taste_item"
                  v-for="taste_item in tastes" plain
                  :type="taste_value===taste_item ? 'danger' : 'default'"
                  @click="taste_value=taste_item" class="button" >{{taste_item}}</mt-button>

     </div>
     <div style="width:100%;margin-top: 10px;" class="flex">
       <span class="iconfont icon-Icon_add_circle count_icon" @click="addCount"></span>
       <input v-model.number="count" class="flex-1 amount-input">
       <span class="iconfont icon-round-remove_circle- count_icon-2" @click="subtract"></span>
     </div>
     <div style="margin-top: 15px;">
       <mt-button @click="addCar" style="border-radius: 18px;width:40%;background-color: #2ab795;color:white;font-size: 15px">加入购物车</mt-button>
       <mt-button @click="toBuy" style="border-radius: 18px;margin-left: 30px;width:40%;background-color:#fd994b;color:white;font-size: 15px">立即购买</mt-button>
     </div>
   </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';

  export default {

    props:{
      product_id:{},
    },
    mounted(){
      console.log("dialogId",this.product_id)
    },
    watch:{
      count(){
        this.count = Number.parseInt(this.count) < 1 ? 1 : this.count;
      }
    },
    data(){
      return{
        count:3,
        taste_value:'',
        tastes:["麻辣","孜然","五香", "黄瓜"]
      }
    },

    methods:{
      ...mapMutations('shopcart', ['add_cart_count']),
      ...mapActions('shopcart', ['init_shopcart']),
      addCount(){
        this.count = Number.parseInt(this.count)+1;
      },
      subtract(){
        this.count = Number.parseInt(this.count)-1;
      },
      addCar(){
        this.add_cart_count(this.count);
        // this.init_shopcart();
        this.$emit('close');
        this.$toast({
          message: '成功添加到购物车',
          iconClass: 'iconfont icon-web-icon-',
          className: 'cart-info-toast',
        })
      },

      toBuy(){

      },
    }
  }
</script>
<style>
  .cart-info-toast {
    z-index:3000
  }
</style>
<style scoped>


  .button{
    height: 30px;
    width: 60px;
    font-size: 13px;
    /*border: 1px solid grey;*/
    margin-left: 8px;
    margin-bottom: 8px;
  }
  .count_icon{
    font-size: 25px;
    color: #2ab795;
    padding: 0 40px;
  }
  .count_icon-2{
    font-size: 30px;
    color: #2ab795;
    padding: 0 40px;
  }
  >>>.mint-button{
    height:35px;
  }
  .amount-input{
    border: 0;
    width:50%;
    border-radius: 8px;
    text-align: center;
  }
  .amount-input:focus{ border:1px solid red; }
  >>>.flex{

  }

</style>