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
        <van-sku
          v-if="goodsData"
          v-model="show"
          :sku="sku"
          :goods="goods"
          :goods-id="goodsData.id"
          :quota="quota"
          :quota-used="quotaUsed"
          :hide-stock="sku.hide_stock"
          :message-config="messageConfig"
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
      show: true,
      quota: 0, // 限购数量
      quotaUsed: 0, // 已经购买过的数量
      goodsData: null, // 商品数据
      bs: null,
      active: 0,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            // k: "颜色", // skuKeyName：规格类目名称
            // k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            // v: [
            //   {
            //     id: "1", // skuValueId：规格值 id
            //     name: "红色", // skuValueName：规格值名称
            //     imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
            //     previewImgUrl: "https://img.yzcdn.cn/1p.jpg", // 用于预览显示的规格类目图片
            //   },
            //   {
            //     id: "1",
            //     name: "蓝色",
            //     imgUrl: "https://img.yzcdn.cn/2.jpg",
            //     previewImgUrl: "https://img.yzcdn.cn/2p.jpg",
            //   },
            // ],
            // largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
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
        picture: "https://img.yzcdn.cn/1.jpg",
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx",
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息",
        },
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
