<template>
  <div class="content">
    <Sheader></Sheader>
    <div class="wrapper">
      <div class="wrapperContent">
        <br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11<br />11 <br />11<br />11
        <br />11<br />11 <br />11<br />11 <br />11
      </div>
    </div>
  </div>
</template>

<script>
import Sheader from '../components/header'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Sheader
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      let bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true,
      });
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.content {
  height: 100%;
  .wrapper {
    border: 1px solid red;
    .wrapperContent {
      padding-top: 60px;
    }
  }
}
</style>
