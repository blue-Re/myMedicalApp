<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BetterScroll('.wrapper', {
      movable: true,
      zoom: true
    })
  }
}
</script>

<style>
  .wrapper{
    height: 100%;
    background-color: aqua;
    overflow: hidden;
  }
</style>