<template>
  <div :class="['layout_aside_wrap',sidebar.opened?'':'layout_aside_wrap_mini']">
    <Logo></Logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <NavTree :isOpen="sidebar.opened"></NavTree>
    </el-scrollbar>
  </div>
</template>

<script>
  import Logo from "@com/Logo/Logo"
  import NavTree from "./NavTree"
  import {mapGetters} from 'vuex'

  export default {
    name: "layout_aside",
    components: {
      Logo,
      NavTree,
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .layout_aside_wrap {
    width: 200px;
    height: 100vh;
    background-color: #ccc;
    transition: width .9s;
    overflow-y: hidden;
    position: absolute;
    left: 0;
    top: 0;

    &.layout_aside_wrap_mini {
      width: 70px;
    }

  }


</style>
