<template>
  <div class="content">
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
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      let bs = new BScroll(".wrapper", {
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
.wrapper {
  border: 1px solid red;
  .wrapperContent {
    padding-top: 60px;
  }
}
</style>
