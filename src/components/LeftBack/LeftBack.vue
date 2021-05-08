<template>
  <div slot="left" @click="back" class="back">
    <i class="iconfont icon-075arrowXZ02"></i>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      // location.reload()
      this.$router.go(-1);
    },
  },
  
};
</script>

<style></style>
