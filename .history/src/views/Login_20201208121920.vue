<template>
  <div>
    <div class="wrapper">
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
import BScroll from "better-scroll";
const bs = new BScroll(".wrap2per", {
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
    console.log(bs);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>