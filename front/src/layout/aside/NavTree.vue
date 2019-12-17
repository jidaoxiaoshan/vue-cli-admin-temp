<template>
  <div class="nav_tree_wrap">
    <el-menu
      default-active="1"
      background-color="#353535"
      text-color="#fff"
      active-text-color="#f00"
      :collapse="!isOpen"
      :unique-opened="true"
      :collapse-transition="false"
      mode="vertical"
    >
      <NavItem v-for="route in routes" :isOpen="isOpen" :key="route.path" :item="route" :base-path="route.path"></NavItem>
    </el-menu>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import NavItem from "./NavItem"
  // import variables from '@/assets/styles/variables.scss'

  export default {
    name: "NavTree",
    components: {
      NavItem,
    },
    props: ['isOpen'],
    data() {
      return {
        // variables,
      }
    },
    computed: {
      ...mapGetters([
        'tapsList',
      ]),
      routes: function () {
        return this.$router.options.routes[0].children
      }
    },
    created() {
      console.log(this.$router.options.routes[0].children);

    },
    methods: {
      openTap(e) {
        // console.log(e);
        let list = this.tapsList;
        let res = list.find(item => {
          return item.index === e.index
        });
        if (res) return false;
        list.push(e);
        this.$store.dispatch('GetTapsList', list)
      }
    }
  }
</script>

<style scoped>
  .nav_tree_wrap {
    height: calc(100vh - 80px);
  }
</style>
