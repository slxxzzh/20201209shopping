<template>
  <div class="goodMsg">
    <span class="sBack" @click="onClickLeft">
      <van-icon name="arrow-left" />
    </span>
    <div class="wrapper">
      <div style="padding-bottom:50px">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img v-if="goodsData" :src="goodsData.image_path" alt="" />
          </van-swipe-item>
        </van-swipe>
        <p v-if="goodsData">{{ goodsData.name }}</p>
        <h6 v-if="goodsData">￥{{ goodsData.present_price }}</h6>
        <div class="goodMsgDiv">
          <span>运费：0</span>
          <span>剩余：10000</span>
          <span>取消收藏：<van-icon name="like"/></span>
        </div>

        <van-cell value="进入店铺" is-link icon="shop-o">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">有赞的店</span>
            <van-tag style="margin-left:10px" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-tabs v-model="active">
          <van-tab title="商品详情"
            ><div
              class="detailImg"
              v-if="goodsData"
              v-html="goodsData.detail"
            ></div
          ></van-tab>
          <van-tab title="商品评论">评论</van-tab>
        </van-tabs>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          v-if="this.$store.state.shopItem === 0"
          @click="toShopping"
        />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          v-if="this.$store.state.shopItem !== 0"
          @click="toShopping"
          :badge="this.$store.state.shopItem"
        />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="ShoppingCart(goodsData.id)"
        />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      goodsData: null, // 商品数据
      bs: null,
      active: 0
    };
  },
  components: {},
  methods: {
    // 加入购物车
    ShoppingCart(id) {
      this.$Toast.loading();
      this.$api
        .addShop({ id })
        .then(res => {
          if (res.code === 200) {
            this.$Toast.success(res.msg);
            this.refreshShoppingCart()
          }
        })
        .catch(err => {
          console.log(err);
          // this.$Toast.fail(err);
        });
      return false;
    },
    refreshShoppingCart() {
      // 刷新购物车商品数量
      this.$api
        .getCard()
        .then(res => {
          // 存vuex
          this.$store.commit("set_ShopItem", res.shopList.length);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toShopping() {
      // 跳转购物车
      this.$router.push({ name: "Shopping" });
    },
    onClickLeft() {
      // 返回
      history.go(-1);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true
      });
      setTimeout(() => {
        this.bs.refresh();
      }, 1000);
    });
    this.refreshShoppingCart()
    // 获取商品信息
    this.$api
      .getGoods(this.$route.query.goodId)
      .then(res => {
        this.goodsData = res.goods.goodsOne;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.my-swipe {
  // height:300px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.detailImg {
  font-size: 0;
}
.goodMsg {
  height: 100vh;
  overflow: hidden;
  text-align: left;
  .wrapper {
    height: 100vh;
    // overflow: hidden;
  }
  p {
    margin: 5px 0;
    padding: 0 10px;
    width: 100%;
  }
  h6 {
    margin: 0;
    padding: 5px 10px;
    font-size: 14px;
    color: rgb(255, 0, 0);
    font-weight: normal;
  }
  .goodMsgDiv {
    display: flex;
    padding: 10px 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 12px;
    position: relative;
    justify-content: space-between;
    span:last-child {
      padding-right: 20px;
    }
    i {
      position: absolute;
      font-size: 20px;
      right: 10px;
      top: 8px;
      color: red;
    }
  }
}
</style>