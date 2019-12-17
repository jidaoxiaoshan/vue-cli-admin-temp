<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <LayoutAside></LayoutAside>
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <LayoutHeader></LayoutHeader>
        <MainTaps v-if="needTagsView"></MainTaps>
      </div>
      <LayoutMain></LayoutMain>
      <LayoutFooter></LayoutFooter>
      <RightPanel v-if="showSettings">
        <Settings></Settings>
      </RightPanel>
    </div>
  </div>
</template>

<script>
  // import LayoutAside from "./aside/LayoutAside"
  import LayoutAside from "./aside/index"
  import LayoutHeader from "./header/LayoutHeader"
  import MainTaps from "./headerTaps/MainTaps"
  import LayoutFooter from "./footer/LayoutFooter"
  import LayoutMain from "./main/LayoutMain"
  import RightPanel from "@com/RightPanel"
  import Settings from "./Settings"
  import {mapGetters} from 'vuex'
  import ResizeMixin from './mixin/ResizeHandler'

  export default {
    name: "index",
    components: {
      LayoutAside,
      LayoutHeader,
      MainTaps,
      LayoutFooter,
      LayoutMain,
      RightPanel,
      Settings,
    },
    mixin: [ResizeMixin],
    computed: {
      ...mapGetters([
        'sidebar',
        'showSettings',
        "needTagsView",
        "fixedHeader",
        "device",
      ]),
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('app/closeSideBar', {withoutAnimation: false})
      }
    }
  }
</script>

<style lang="scss" scoped>

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100vh;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }

  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }
  .mobile .fixed-header {
    width: 100%;
  }
</style>
