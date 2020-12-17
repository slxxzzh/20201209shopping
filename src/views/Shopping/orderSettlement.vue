<template>
  <div class="orderSettlement">
    <van-nav-bar
      title="订单结算"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="receiving" @click="toAddress">
      <van-icon class="location" name="location-o" />
      <div style="flex-grow:1">
        <h1>
          <span>收货人：{{ defaultAdd.name }}</span>
          <span>{{ defaultAdd.tel }}</span>
        </h1>
        <h2>收货地址：{{ defaultAdd.address }}</h2>
        <h3>（收货不便时可选择免费待收货服务）</h3>
      </div>
      <van-icon class="arrow" name="arrow" />
    </div>
    <div>
      <van-card
        v-for="item in shopList"
        :key="item.cid"
        :num="item.count"
        :price="(item.present_price * item.count).toFixed(2)"
        :title="item.name"
        :thumb="item.image_path"
      />
    </div>
    <van-submit-bar
      v-if="shopList.length > 0"
      :price="allPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      id: "",
      shopList: [], //订单信息,
      defaultAdd: [] // 默认地址
    };
  },
  components: {},
  methods: {
    // 提交订单
    onSubmit() {
      console.log(this.orderId);
      this.$api
        .order({
          // /order
          // 参数:
          // address:收货地址
          // tel:电话
          // orderId:所有商品的id(数组)
          // totalPrice:总价格
          // idDirect:用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
          // count:商品数量
          address: this.defaultAdd.address,
          tel: this.defaultAdd.tel,
          orderId: this.orderId,
          totalPrice: this.allPrice / 100,
          idDirect: false,
          count: this.allCount
        })
        .then(res => {
          this.$Toast.success(res.msg);
          this.$router.push({ name: "Mine" });
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 跳转至选择收货地址
    toAddress() {
      this.$router.push({ name: "address", query: { isShopping: true } });
    },
    // 获取默认地址
    getDefaultAddress() {
      this.$api
        .getDefaultAddress()
        .then(res => {
          this.defaultAdd = res.defaultAdd;
          console.log(this.defaultAdd);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取单个收货地址
    getAddress() {
      this.$api
        .getAddress()
        .then(res => {
          this.defaultAdd = res.address.filter(item => {
            return item._id === this.id;
          })[0];
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // 获取商品数据
    this.shopList = JSON.parse(localStorage.getItem("shopList"));
    // 获取默认地址
    this.id = this.$route.query.addressId;
    if (this.id) {
      this.getAddress();
    } else {
      this.getDefaultAddress();
    }
  },
  computed: {
    // 总价
    allPrice() {
      let p = 0;
      this.shopList.map(item => {
        p += item.count * item.mallPrice * 100;
      });
      return p;
    },
    // 商品总数
    allCount() {
      let p = 0;
      this.shopList.map(item => {
        p += item.count;
      });
      return p;
    }, // 商品ID
    orderId() {
      let p = [];
      this.shopList.map(item => {
        p.push(item.cid);
      });
      return p;
    }
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
.receiving {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 2px solid #eee;
  .location {
    margin-right: 10px;
    font-size: 30px;
  }
  .arrow {
    margin-left: 10px;
    font-size: 20px;
    position: relative;
    right: 0px;
  }
  h1 {
    font-weight: normal;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    span {
    }
  }
  h2 {
    font-weight: normal;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-weight: normal;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    color: orange;
  }
}
.van-card {
  background: white;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-top: 0;
  text-align: left;
  padding: 10px 10px;
  height: 90px;
  .van-image {
    height: 60px;
    box-shadow: 0 0 3px #ccc;
    img {
      height: 50px !important;
    }
  }
  .van-card__content {
    padding-left: 10px;
  }
  .van-card__title {
    font-size: 14px;
    color: red;
  }
  .van-card__price {
    margin-top: -20px;
    font-size: 14px;
    color: red;
    font-weight: 600;
  }
  .van-card__num {
    font-size: 14px;
    color: #333;
  }
  .van-card__footer {
    margin-top: -20px;
    i {
      font-size: 18px;
    }
  }
}
</style>