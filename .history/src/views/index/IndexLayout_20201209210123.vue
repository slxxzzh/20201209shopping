<template>
  <div class="content">
    <router-view></router-view>
    <Sfooter></Sfooter>
  </div>
</template>

<script>
import Sheader from "../../components/header";
import Sfooter from "../../components/footer";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Sheader,
    Sfooter,
  },
  methods: {},
  mounted() {
    // this.$nextTick(() => {
    //   let bs = new this.$Scroll(".wrapper", {
    //     scrollX: true,
    //     click: true,
    //   });
    // });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss'>
.content {
  height: 100%;
  // overflow: hidden;
  .wrapper {
    height:100vh;
    .wrapperContent {
      padding-bottom: 50px;
    }
  }
}
</style>
