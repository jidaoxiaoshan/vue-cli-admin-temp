<template>
  <div class="layout_container">
    <LayoutAside class="layout_aside"></LayoutAside>
    <div :class="['layout_content',sidebar.opened?'':'layout_content_min']">
      <LayoutHeader></LayoutHeader>
      <MainTaps v-if="needTagsView"></MainTaps>
      <LayoutMain style="padding: 10px"></LayoutMain>
      <LayoutFooter></LayoutFooter>
    </div>
    <RightPanel v-if="showSettings">
      <Settings></Settings>
    </RightPanel>
  </div>
</template>

<script>
  import LayoutAside from "./aside/LayoutAside"
  import LayoutHeader from "./header/LayoutHeader"
  import MainTaps from "./headerTaps/MainTaps"
  import LayoutFooter from "./footer/LayoutFooter"
  import LayoutMain from "./main/LayoutMain"
  import RightPanel from "@com/RightPanel"
  import Settings from "./Settings"
  import {mapGetters} from 'vuex'
  import ResizeMixin from './mixin/ResizeHandler'

  export default {
    name: "layout",
    components: {
      LayoutAside,
      LayoutHeader,
      MainTaps,
      LayoutFooter,
      LayoutMain,
      RightPanel,
      Settings,
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'showSettings',
        "needTagsView",
        "fixedHeader",
      ]),
      device: function () {
        if (/ucweb|midp|android|webos|mobile|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLocaleLowerCase())) {
          return 'mobile'
        } else {
          return 'pc'
        }
      }
    },
    mixin:[ResizeMixin],
    created() {
      this.$store.dispatch('app/toggleDevice', this.device)
    }
  }
</script>

<style lang="scss" scoped>
  .layout_container {
    .layout_aside {
      position: relative;
      left: 0;
      top: 0;
      z-index: 999;
    }

    .layout_content {
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-left: 220px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: padding-left .9s;
      &.layout_content_min {
        padding-left: 60px;
      }
    }
  }
</style>
