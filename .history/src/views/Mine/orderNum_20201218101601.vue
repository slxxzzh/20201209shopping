<template>
  <div class="listPage">
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
      <van-tab title="待评价">
        <div class="listDiv" v-for="item in list4" :key="item._id">
          <h1>订单编号：{{item.order_id}} <span>待评价</span></h1>
          <div v-for="item2 in item.order_list" :key="item2._id" class="listDivContent">
            <img :src="item2.image_path" alt="">
              <p>{{item2.name}}</p>
              <div style="text-align:right">
                <b>￥{{item2.mallPrice}}</b>
                <br>
                <i>*{{item2.count}}</i>
              </div>
          </div>
        </div>
      </van-tab>
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
.listPage{
  background:#eee;
}
.listDiv{
  border-radius: 5px;
  background:white;
  margin:10px auto 0;
  width:95vw;
  padding: 3px 10px;
  box-sizing: border-box;
  h1{
    font-size: 14px;
    color:#333;
    font-weight: 100;
    display:flex;
    padding-bottom: 8px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    span{
      color:orange;
    }
  }
  .listDivContent{
    display:flex;
    justify-content: space-between;
    text-align:left;
    img{
      width:90px;
      border:1px solid #eee
    }
    p{
      margin: 0;
      font-size: 14px;
    }
    b{
      font-weight: 100;
      font-size: 12px;
    }
    i{
      font-style:normal;
      color:#999;
      font-size: 12px;
    }
  }
}
</style>