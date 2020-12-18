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
        <div class="wrapper">
          <div style="padding:5px 0 110px">
            <div class="listDiv" v-for="item in list4" :key="item._id">
              <h1>订单编号：{{ item.order_id }} <span>待评价</span></h1>
              <div
                v-for="item2 in item.order_list"
                :key="item2._id"
                class="listDivContent"
              >
                <div class="listDivContentMsg">
                  <img :src="item2.image_path" alt="" />
                  <p>{{ item2.name }}</p>
                  <div style="text-align:right">
                    <b>￥{{ item2.mallPrice }}</b>
                    <br />
                    <i>*{{ item2.count }}</i>
                  </div>
                </div>
                <h4>创建时间：{{ item.add_time }}</h4>
                <h4>收货地址：{{ item.address }}</h4>
                <h4>
                  共{{ item.order_list.length }}件商品 合计：{{
                    item.mallPrice
                  }}
                </h4>
              </div>
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
      active: 0,
      list4: [], // 待评价
      list5: [], // 已完成
      bs: null,
    };
  },
  components: {},
  methods: {
    // 查询订单数量
    getOrder() {
      this.$api
        .myOrder()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 查询订单
    getMyOrder() {
      this.$api
        .getMyOrder()
        .then((res) => {
          console.log(res);
          this.list4 = res.list.filter((item) => {
            return item.status === 4;
          });
          this.list5 = res.list.filter((item) => {
            return item.status === 5;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getMyOrder();
  },
  computed: {},
  watch: {
    active() {
      setTimeout(() => {
        this.bs = new this.$Scroll(".wrapper", {
          scrollX: true,
          click: true,
        });
        this.bs.refresh();
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  overflow: hidden;
}
.listPage {
  background: #eee;
  height: 100vh;
  overflow: hidden;
}
.listDiv {
  border-radius: 5px;
  background: white;
  margin: 10px auto 0;
  width: 95vw;
  padding: 3px 10px;
  box-sizing: border-box;
  h1 {
    font-size: 14px;
    color: #333;
    font-weight: 100;
    display: flex;
    padding-bottom: 8px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    span {
      color: orange;
    }
  }
  .listDivContent {
    text-align: left;
    .listDivContentMsg {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
    }
    h4 {
      font-size: 12px;
      font-weight: 100;
      text-align: right;
      margin: 8px 0;
    }
    img {
      width: 80px;
      border: 1px solid #eee;
    }
    p {
      margin: 0 5px;
      font-size: 14px;
    }
    b {
      font-weight: 100;
      font-size: 14px;
    }
    i {
      font-style: normal;
      color: #999;
      font-size: 14px;
    }
  }
}
</style>
