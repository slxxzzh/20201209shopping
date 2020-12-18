<template>
  <div>
    <van-nav-bar
      title="我的订单"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active">
      <van-tab title="全部">全部</van-tab>
      <van-tab title="待支付">待支付</van-tab>
      <van-tab title="待收货">待收货</van-tab>
      <van-tab title="待评价">待评价</van-tab>
      <van-tab title="已完成">已完成</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      active:0,
      list4:[],// 待评价
      list5:[],// 已完成
    };
  },
  components: {},
  methods: {
    // 查询订单数量
    getOrder() {
      this.$api
        .myOrder()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 查询订单
    getMyOrder() {
      this.$api
        .getMyOrder()
        .then(res => {
          console.log(res);
          this.list4 = res.list.filter(item=>{
            return item.status === 4
          })
          this.list5 = res.list.filter(item=>{
            return item.status === 5
          })
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getMyOrder();
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>