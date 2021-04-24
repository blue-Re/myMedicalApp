<template>
  <transition name="move">
    <slot name="Move"></slot>
    
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.move-enter-active,
.move-leave-active {
  transition: all 0.7s;
}
.move-enter,
.move-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>