<template>
  <div>
    <Sheader></Sheader>
    <div class="wrapper">
      <div class="wrapperContent">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>

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
      slides: -1, // 轮播图数据
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
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
