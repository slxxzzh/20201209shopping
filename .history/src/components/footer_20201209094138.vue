<template>
  <div class="content">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="wap-home">商城</van-tabbar-item>
      <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" badge="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      active:0,
      address: "定位中..",
      value: "",
    };
  },
  components: {},
  methods: {
    onSearch() {},
  },
  mounted() {
    let _this = this;
    this.$api
      .getIndexData()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // 页面
    this.$nextTick(() => {
      let bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true,
      });
    });
    let amap = new AMap.Map("container", {
      resizeEnable: true,
    });
    AMap.plugin("AMap.Geolocation", function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB",
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        _this.address = data.addressComponent.city;
      }

      function onError(data) {
        console.log(data);
        // 定位出错
      }
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.content {
  height: 100%;
  .van-search {
    width: 100%;
    z-index: 10;
    position: fixed;
    background: white;
  }
}
</style>