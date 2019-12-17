<template>
  <div>
    ccccccccccccccccccccccc
    <button @click="close">关闭c标签</button>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"

  export default {
    name: "c",
    computed: {
      ...mapGetters([
        'tapsList',
      ])
    },
    methods: {
      close() {
        let pathName = this.$route.path;
        let list = this.tapsList;
        list.forEach((item, index) => {
          if (item.index === pathName) {
            console.log("======");
            list.splice(index, 1);
            let pathIndex = parseInt(index - 1);
            let path = pathIndex ? list[pathIndex].index : '/';
            this.$router.push(path);
            this.$store.dispatch('GetTapsList',list);
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
