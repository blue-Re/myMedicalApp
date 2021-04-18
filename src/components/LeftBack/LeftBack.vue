<template>
  <div slot="left" @click="back" class="back">
    <i class="iconfont icon-075arrowXZ02"></i>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
