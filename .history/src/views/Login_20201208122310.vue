<template>
  <div>
    <div class="aa">
      <ul class="content">
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
const bs = new BScroll(".aa", {
  //   scrollY: true,
  //   click: true,
  //   pullUpLoad: true,
  //   scrollbar: true,
  //   pullDownRefresh: true,
  // and so on
});
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
      let bs = new BScroll(this.$refs.wrapper, {
      click: true
    })
    })
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>