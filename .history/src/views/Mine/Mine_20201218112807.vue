<template>
  <div class="wrapper">
    <div class="wrapperContent">
      <van-nav-bar
        title="会员中心"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="MineHeader">
        <van-icon name="setting" @click="$router.push({ name: 'SetUser' })" />
        <div style="height:1px"></div>
        <img src="../../assets/header.jpg" alt="" />
        <span v-if="userInfo">欢迎您：{{ userInfo.nickname }}</span>
        <a href="">退出登录</a>
      </div>
      <van-grid>
        <van-grid-item icon="coupon-o" text="待付款" v-if="order[0] === 0" @click="$router.push({name:'orderNum',query:{active:1}})"/>
        <van-grid-item
          icon="coupon-o"
          text="待付款"
          v-if="order[0] !== 0"
          :badge="order[0]"
          @click="$router.push({name:'orderNum',query:{active:1}})"
        />
        <!-- <van-grid-item icon="tosend" text="待发货" v-if="order[1] === 0" @click="$router.push({name:'orderNum',query:{active:1}})"/>
        <van-grid-item
          icon="tosend"
          text="待发货"
          v-if="order[1] !== 0"
          :badge="order[1]"
          @click="$router.push({name:'orderNum',query:{active:2}})"
        /> -->
        <van-grid-item icon="shop-o" text="待收货" v-if="order[2] === 0" @click="$router.push({name:'orderNum',query:{active:2}})"/>
        <van-grid-item
          icon="shop-o"
          text="待收货"
          v-if="order[2] !== 0"
          :badge="order[2]"
          @click="$router.push({name:'orderNum',query:{active:2}})"
        />
        <van-grid-item icon="comment-o" text="评价" v-if="order[3] === 0" @click="$router.push({name:'orderNum',query:{active:3}})"/>
        <van-grid-item
          icon="comment-o"
          text="评价"
          v-if="order[3] !== 0"
          :badge="order[3]"
          @click="$router.push({name:'orderNum',query:{active:3}})"
        />
        <van-grid-item icon="sign" text="已完成" v-if="order[4] === 0" @click="$router.push({name:'orderNum',query:{active:4}})"/>
        <van-grid-item
          icon="sign"
          text="已完成"
          v-if="order[4] !== 0"
          :badge="order[4]"
          @click="$router.push({name:'orderNum',query:{active:4}})"
        />
      </van-grid>
      <van-cell title="全部订单" is-link icon="records" to="/orderNum" />
      <van-cell title="收藏商品" is-link icon="like-o" to="/collection" />
      <van-cell title="地址管理" is-link icon="wap-home-o" to="/address" />
      <van-cell title="最近浏览" is-link icon="eye-o" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      userInfo: null, // 用户信息
      order: [] // 订单数量
    };
  },
  components: {},
  methods: {
    // 获取用户信息
    queryUser() {
      this.$api
        .queryUser()
        .then(res => {
          this.userInfo = res.userInfo;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 查询订单数量
    getOrder() {
      this.$api
        .myOrder()
        .then(res => {
          console.log(res);
          this.order = res.numList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.queryUser();
    this.getOrder();
    this.$nextTick(() => {
      let bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true
      });
    });
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.van-grid {
  .van-grid-item {
    // flex-basis: 20% !important;
  }
}
.van-cell {
  text-align: left;
}
.MineHeader {
  height: 220px;
  background: rgb(227, 12, 123);
  text-align: center;
  position: relative;
  .van-icon {
    color: white;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 24px;
  }
  img {
    display: block;
    width: 80px;
    border-radius: 50%;
    margin: 40px auto 0;
  }
  span {
    display: block;
    margin-top: 10px;
    color: white;
    font-weight: 800;
    font-size: 18px;
  }
  a {
    display: block;
    margin-top: 10px;
    color: white;
    font-size: 14px;
  }
}
</style>