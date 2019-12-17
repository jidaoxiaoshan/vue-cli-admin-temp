<template>
  <div>
    <i :class="['icon_size','el-icon-full-screen']"  @click="click"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  methods: {
    click() {
      screenfull.toggle()
    }
  }
}
</script>

<style scoped>
.icon_size {
  font-size: 20px;
  color: #000;
}
</style>
