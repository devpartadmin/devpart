<template>

   <div>..................</div>

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
.dialog{
  width:100px;
  height:100px;
  text-align: center;
}
</style>