<template>
  <div class="" style="margin-top: 30px">
    <hr>
    <div>
      <span style="margin-left: 5%;font-size: 15px">{{title}}</span>
      <span style="margin-right: 3%;font-size: 13px;color: #969896;float: right">
        <slot name="right"></slot>
      </span>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    props:{
      title: String,
    },
  }
</script>

<style scoped>
  hr{
    border-color: lightgray;
    border-top: 0px;
  }
</style>