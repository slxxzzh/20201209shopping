<template>
  <div>
    <Sheader></Sheader>
    <div class="wrapper">
      <div class="wrapperContent">
        首页
        <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Sheader from "../../components/header";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Sheader,
  },
  methods: {},
  mounted() {
     this.$nextTick(() => {
      let bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true,
      })
    })
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.wrapperContent {
  padding-top: 60px;
  padding-bottom: 50px;
}
</style>
