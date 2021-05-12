<template>
  <Move>
    <div class="illness" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">疾病</div>
      </NavBar>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";
import { reqOftenIllness } from "../../../mockjs/reqMock"; //引入模拟数据
export default {
  components: {
    NavBar,
    LeftBack,
    Move,
  },
  mounted() {
    // reqOftenIllness().then((res) => {
    //   console.log(res);
    //   this.mockDataOftenIllness = res.data;
    // });
  },
  data() {
    return {
      active: 2,
      mockDataOftenIllness: [],
    };
  },
};
</script>

<style></style>
