<template>
   <div>
     <div></div>
     <div></div>
     <div></div>

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
</style>