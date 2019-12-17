<template>
  <div class="logo_container" @click="whatDoYouWantToDo">
    <el-image :src="logoSrc" fit="contain" style="width: 100%;height: 100%"></el-image>
  </div>
</template>

<script>
  import logoSrc from "@/assets/logo.png"

  export default {
    name: "Logo",
    data() {
      return {
        logoSrc,
      }
    },
    methods:{
      whatDoYouWantToDo() {
        alert("你想干啥！")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo_container {
    background-color: transparent;
    height: 77px;
    cursor: pointer;
  }
</style>
