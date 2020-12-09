<template>
  <div class="content">
    <Sheader></Sheader>
    <!-- <div class="wrapper">
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
    </div> -->
    <router-view></router-view>
    <Sfooter></Sfooter>
  </div>
</template>

<script>
import Sheader from '../../components/header'
import Sfooter from '../../components/footer'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Sheader,Sfooter
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
   padding-top: 60px;
      padding-bottom: 50px;
  .wrapper {
    border: 1px solid red;
    .wrapperContent {
     
    }
  }
}
</style>
