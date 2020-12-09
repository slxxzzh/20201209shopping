<template>
  <div class="">
    <van-search
      v-model="value"
      show-action
      :label="address"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
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
  .van-search__label{
    position: relative;
    padding-right: 20px;
  }
  .van-search__label:after{
    content:"";
    width: 0;
    height: 0;
    top:13px;
    right:6px;
    position: absolute;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 7px solid black;
  }
}
</style>