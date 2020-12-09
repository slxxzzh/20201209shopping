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
import BScroll from "@better-scqweroll/corae";
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
    console.log(BScroll);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>