<template>
  <div class="wrapper">
    <div class="wrapperContent">
      个人中心
      <br> 个人中心
      <br> 个人中心
      <br> 个人中心
      <br> 个人中心
      <br> 个人中心
      <br>
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
</style>