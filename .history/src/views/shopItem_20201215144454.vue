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
        <van-goods-action-button
          type="danger"
          @click="show = true"
          text="立即购买"
        />
        <van-sku
          v-if="goodsData"
          v-model="show"
          :sku="sku"
          :goods="goods"
          :goods-id="goodsData.id"
          :quota="quota"
          :quota-used="quotaUsed"
          :hide-stock="sku.hide_stock"
        />
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
      show: false,
      quota: 0, // 限购数量
      quotaUsed: 0, // 已经购买过的数量
      goodsData: null, // 商品数据
      bs: null,
      active: 0,
      sku: {
        tree: [{
            v: [{}],
            largeImageMode: false, //  是否展示大图模式
          }],
        list: [{
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          }],
        price: 0, // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "",
      },
 
    };
  },
  components: {},
  methods: {
    // 加入购物车
    ShoppingCart(id) {
      this.$Toast.loading();
      this.$api
        .addShop({ id })
        .then((res) => {
          if (res.code === 200) {
            this.$Toast.success(res.msg);
            this.refreshShoppingCart();
          }
        })
        .catch((err) => {
          console.log(err);
          // this.$Toast.fail(err);
        });
      return false;
    },
    refreshShoppingCart() {
      // 刷新购物车商品数量
      this.$api
        .getCard()
        .then((res) => {
          // 存vuex
          this.$store.commit("set_ShopItem", res.shopList.length);
        })
        .catch((err) => {
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
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true,
      });
      setTimeout(() => {
        this.bs.refresh();
      }, 1000);
    });
    this.refreshShoppingCart();
    // 获取商品信息
    this.$api
      .getGoods(this.$route.query.goodId)
      .then((res) => {
        this.goodsData = res.goods.goodsOne;
        this.sku.price = res.goods.goodsOne.present_price
        this.sku.goods.picture = res.goods.goodsOne.image_path
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
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
