<template>
  <div class="wrapper">
    <div class="wrapperContent">
      <van-nav-bar
      title="商品分类"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
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
  methods: {
    onClickLeft(){
      history.go(-1)
    }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>