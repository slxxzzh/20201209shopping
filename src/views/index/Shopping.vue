<template>
  <div class="wrapper">
    <div class="wrapperContent">
      <van-nav-bar
        title="商品分类"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="shopTitle">
        <div>
          <van-checkbox
            @click="checkAll"
            v-model="checkAllInput"
            shape="square"
            checked-color="#ee0a24"
            >全选</van-checkbox
          >
        </div>
        <div style="margin-right:30px;text-align:left">
          <p>
            合计：<span>￥{{ allPrice }}</span>
          </p>
          <p>请确认订单</p>
        </div>
      </div>
      <div class="shopBtn">
        <van-button size="small" color="rgb(230,5,127)" @click="deleteShop"
          >删除</van-button
        >
        <van-button size="small" color="rgb(230,5,127)">去结算</van-button>
      </div>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="wrapper2">
          <div>
            <div class="shopItem" v-for="item in shopList" :key="item._id">
              <van-checkbox
                :name="item.cid"
                shape="square"
                checked-color="rgb(224,50,43)"
              ></van-checkbox>
              <div>
                <img :src="item.image_path" alt="" />
              </div>
              <div>
                <p>{{ item.name }}</p>
                <span
                  >￥{{ (item.present_price * item.count).toFixed(2) }}</span
                >
                <van-stepper
                  disable-input
                  v-model="item.count"
                  async-change
                  theme="round"
                  @plus="
                    stepperChange(item.count, item.cid, item.present_price)
                  "
                  @minus="
                    stepperChange(item.count, item.cid, item.present_price)
                  "
                />
              </div>
            </div>
            <van-empty v-if="shopList.length === 0" description="空空如也" />
          </div>
        </div>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      result: [], // 选择框
      checkAllInput: false, // 全选
      shopList: [], // 购物车数据
      bs: null
    };
  },
  components: {},
  methods: {
    // 更新购物车数量
    setShopItem() {
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
    // 删除商品

    deleteShop() {
      let _this = this;
      if (this.result.length === 0) {
        return;
      } else {
        Dialog.confirm({
          title: "删除购物车商品",
          message: "确认删除？",
          beforeClose
        }).catch(() => {});
      }
      function beforeClose(action, done) {
        if (action === "confirm") {
          _this.$api
            .deleteShop(Array.from(_this.result))
            .then(res => {
              _this.$Toast.success("删除成功");
              _this.result = [];
              _this.setShopItem();
              _this.getCard();
              done();
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          done();
        }
      }
    },
    // 修改数量
    stepperChange(count, id, mallPrice) {
      // count: 购物车数量
      // id: 商品id
      // mallPrice: 价格
      this.$Toast.loading();
      this.$api
        .editCart({
          count,
          id,
          mallPrice
        })
        .then(res => {
          this.$Toast.clear();
        })
        .catch(err => {
          console.log(err);
          this.$Toast.clear();
        });
    },
    // 获取购物车数据
    getCard() {
      this.$api
        .getCard()
        .then(res => {
          this.shopList = res.shopList;
          this.shopList.map(item => {
            if (item.check) {
              this.result.push(item.cid);
            }
          });
          this.$Toast.clear()
          setTimeout(() => {
            this.bs.refresh();
          }, 0);
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkAll() {
      if (this.checkAllInput) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    onClickLeft() {
      // 返回
      history.go(-1);
    }
  },
  mounted() {
    this.$Toast.loading()
    this.$nextTick(() => {
      this.bs = new this.$Scroll(".wrapper2", {
        scrollX: true,
        click: true
      });
    });
    this.getCard();
  },
  computed: {
    allPrice() {
      // 总价
      let p = 0;
      this.shopList.map(item => {
        if (item.check) {
          p += item.count * item.present_price;
        }
      });
      return p.toFixed(2);
    }
  },
  watch: {
    result: {
      handler(v) {
        // 改变数据
        this.shopList.map(item2 => {
          item2.check = false;
          v.map(item => {
            if (item === item2.cid) {
              item2.check = true;
            }
          });
        });
        // 改变全选按钮
        if (v.length !== this.shopList.length) {
          this.checkAllInput = false;
        } else {
          this.checkAllInput = true;
        }
      },
      deep: true
    },
    shopList: {
      handler(v) {},
      deep: true
    }
  }
};
</script>

<style lang='scss' scoped>
.shopTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 15px 10px;
  font-size: 14px;
  p {
    margin: 10px 0 0;
    span {
      font-weight: 700;
      color: rgb(224, 50, 43);
    }
  }
}
.shopBtn {
  text-align: right;
  padding: 10px 0;
  button {
    margin-right: 10px;
  }
}
.wrapper2 {
  height: 66vh;
  overflow: hidden;
}
.shopItem {
  display: flex;
  padding: 10px 15px 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
  // line-height: 30px;
  img {
    height: 70px;
    width: 70px;
    border: 1px solid #eee;
    margin-left: 10px;
    margin-right: 10px;
  }
  p {
    width: 220px;
    font-size: 14px;
    margin-top: 0;
    color: rgb(224, 50, 43);
  }
  span {
    display: inline-block;
    color: rgb(224, 50, 43);
    position: relative;
    top: 5px;
  }
  .van-stepper {
    display: inline-block;
    float: right;
  }
}
</style>