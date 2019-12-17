<template>
  <div style="display: flex;justify-content: space-between">
    <div style="width: 20%;height: 30px;background-color: orange">简述</div>
    <div class="scroll_wrap">
      <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
        <div class="scroll_item">scroll_item</div>
        <div class="scroll_item">scroll_item</div>
        <div class="scroll_item">scroll_item</div>
        <div class="scroll_item">scroll_item</div>
        <div class="scroll_item">scroll_item</div>
        <div class="scroll_item">scroll_item</div>
        <div class="scroll_item">scroll_item</div>
        <div class="scroll_item">scroll_item</div>
      </el-scrollbar>
    </div>
    <div style="width: 20%;height: 30px;background-color: orange">简述</div>
  </div>
</template>

<script>
  export default {
    name: "f"
  }
</script>

<style lang="scss" scoped>
  .scroll_wrap {
    width: 500px;
    height: 500px;
    background-color: aquamarine;
    overflow-y: hidden;

    .scroll_item {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
      background-color: lightslategrey;
    }
    .scroll-container {
      height: 500px;
      overflow-y: hidden;

      .el-scrollbar__wrap {
       overflow: auto;
      }
    }
  }

</style>
