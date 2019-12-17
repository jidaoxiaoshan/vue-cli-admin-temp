<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <span
      :class="{'is-active':isActive}"
      class="hamburger el-icon-s-fold"></span>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleClick() {
        this.$emit('toggleClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    font-size: 24px;
  }

  .hamburger.is-active {
    transform: rotate(180deg);
  }
</style>
