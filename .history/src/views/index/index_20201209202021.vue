<template>
  <div>
    <Sheader></Sheader>
    <div class="wrapper">
      <div class="wrapperContent">
        <!-- 轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in slides" :key="item.goodsId">
            <img :src="item.image" alt="" />
          </van-swipe-item>
        </van-swipe>
        <!-- 商品分类 -->
        <ul class="goodsList">
          <li v-for="item in category" :key="item.mallCategoryId">
            <img :src="item.image" alt="" />
            {{ item.mallCategoryName }}
          </li>
        </ul>
        <!-- 单张图片 -->
        <img :src="advertesPicture" alt="" width="100%" />
        <!-- 商品推荐 -->
        <div class="recommend">
          <h1>商品推荐</h1>
          <ul>
            <li>
              <img src="" alt="" />
              <p>那没小苏对巴巴爸爸吧</p>
              <span>￥16.7</span><i>￥16.6</i><br />
              <button><van-icon name="shopping-cart-o" /></button>
              <button>查看详情</button>
            </li>
            <li>
              <img src="" alt="" />
              <p>那没小苏对巴巴爸爸吧</p>
              <span>￥16.7</span><i>￥16.6</i><br />
              <button class="shopping">
                <van-icon name="shopping-cart-o" />
              </button>
              <button>查看详情</button>
            </li>
            <li>
              <img src="" alt="" />
              <p>那没小苏对巴巴爸爸吧</p>
              <span>￥16.7</span><i>￥16.6</i><br />
              <button><van-icon name="shopping-cart-o" /></button>
              <button>查看详情</button>
            </li>
          </ul>
        </div>
        首页 首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Sheader from "../../components/header";
export default {
  name: "",
  props: {},
  data() {
    return {
      slides: [], // 轮播图数据
      category: [], //商品分类数据
      advertesPicture: -1, // 单张图片地址
    };
  },
  components: {
    Sheader,
  },
  methods: {},
  mounted() {
    this.$api
      .getIndexData()
      .then((res) => {
        if (res.code === 200) {
          this.slides = res.data.slides;
          this.category = res.data.category;
          this.advertesPicture = res.data.advertesPicture.PICTURE_ADDRESS;
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    this.$nextTick(() => {
      let bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true,
      });
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.wrapperContent {
  padding-top: 60px;
  padding-bottom: 50px;
  background: rgb(238, 238, 238);
}
.my-swipe {
  height: auto;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
  }
}
.goodsList {
  display: flex;
  width: 95%;
  box-shadow: 0 0 3px #aaa;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px auto 10px;
  border-radius: 5px;
  background: white;
  li {
    width: 25%;
    margin: 0 5px;
    font-size: 12px;
    img {
      width: 100%;
    }
  }
}
.recommend {
  background: white;
  h1 {
    text-align: left;
    font-size: 15px;
    padding: 6px 18px;
    font-weight: normal;
    border-bottom: 1px solid #eee;
  }
  ul {
    display: flex;
    li {
      box-sizing: border-box;
      padding: 10px;
      font-size: 13px;
      text-align: left;
      width: 35%;
      img {
        width: 100%;
      }
      p {
        width: 100%;
        margin: 5px auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span {
      }
      i {
        text-decoration: line-through;
        color: #999;
        font-style: normal;
        margin-left: 5px;
      }
      button {
        i {
          margin-left: 0;
          color:white;
          outline: none;
          border:none;
        }
      }
      button.shopping {
        background:rgb(254,202,58)
      }
    }
  }
}
</style>
