<template>
  <div class="content">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#666">
      <van-tabbar-item icon="wap-home">商城</van-tabbar-item>
      <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" badge="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
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