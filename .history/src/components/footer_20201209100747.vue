<template>
  <div class="content">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#666" route>
      <van-tabbar-item icon="wap-home" push to="/index">商城</van-tabbar-item>
      <van-tabbar-item icon="wap-nav" push to="/Classification">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" push badge="5" to="/Shopping">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" push to="/Mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      active:0,
    };
  },
  components: {},
  methods: {
  },
  mounted() {
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.content {
  height: 100%;
  .van-tabbar{
    color:#999
  }
}
</style>