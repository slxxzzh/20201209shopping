<template>
  <div>
    <Sheader></Sheader>
    <div class="wrapper">
      <div class="wrapperContent">
        <!-- 轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in slides" :key="item.goodsId">
            <img :src="item.image" alt="">
          </van-swipe-item>
        </van-swipe>
        <!-- 商品分类 -->
        <ul class="goodsList">
          <li v-for="item in category" :key="item.mallCategoryId">
            <img :src="item.image" alt="">
            {{item.mallCategoryName}}
          </li>
        </ul>
        <!-- 单张图片 -->
        <img src="advertesPicture" alt="">
        首页
        <br />
        首页 <br />
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
          this.category = res.data.category
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
}
 .my-swipe{
   height:auto
 }
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0px;
    text-align: center;
    background-color: #39a9ed;
    img{
      width: 100%;
    }
  }
  .goodsList{
    display:flex;
    width:95%;
    box-shadow: 0 0 6px #aaa;
    padding:10px;
    box-sizing: border-box;
    margin: 20px auto 5px;
    border-radius: 5px;
    li{
      width:25%;
      margin:0 5px;
      font-size: 12px;
      img{
        width: 100%;
      }
    }
  }
</style>
