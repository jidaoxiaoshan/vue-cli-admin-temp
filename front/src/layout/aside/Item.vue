<!--<template>
  <div>
    <i v-if="icon" :class="icon"></i>
    <span v-if="title" slot='title'>{{title}}</span>
  </div>
</template>-->

<script>
  export default {
    name: "Item",
    functional: true,
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    render(h, context) {
      const { icon, title } = context.props
      const vnodes = []

      if (icon) {
        vnodes.push(<i class={icon}/>)
      }

      if (title) {
        vnodes.push(<span slot='title'>{(title)}</span>)
      }
      return vnodes
    }
  }
</script>

<style scoped>

</style>
