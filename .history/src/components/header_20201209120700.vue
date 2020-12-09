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
        <div @click="onSearch" v-if="!show">搜索</div>
        <div @click="onSearch" v-if="show">取消</div>
      </template>
    </van-search>
    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <van-cell class="cityTitle" title="城市列表" icon="arrow-left" />
      <div class="Cwrapper">
        <div class="cityWrapper">
          <van-index-bar>
            <van-index-anchor index="A" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="C" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="D" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="E" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="F" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-index-anchor index="G" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
          </van-index-bar>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      show: true,
      address: "定位中..",
      value: "",
      bs:null,
    };
  },
  components: {},
  methods: {
    onSearch() {},
  },
  mounted() {
    document
      .getElementsByClassName("van-search__label")[0]
      .addEventListener("click", () => {
        this.show = true;
        this.bs.refresh()
      });
    document
      .getElementsByClassName("van-cell__left-icon")[0]
      .addEventListener("click", () => {
        this.show = false;
      });

    let _this = this;
    this.$api
      .getIndexData()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // 页面滚动
    this.$nextTick(() => {
      alert()
      let bs = new this.$Scroll(".cityW1rapper", {
        scrollX: true,
        click: true,
      });
      this.bs = bs
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
  .van-search__label {
    position: relative;
    padding-right: 20px;
  }
  .van-search__label:after {
    content: "";
    width: 0;
    height: 0;
    top: 14px;
    right: 8px;
    position: absolute;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 7px solid black;
  }
  .Cwrapper{
    height:80%;
    overflow: hidden;
    border:1px solid #523423
  }
  .cityTitle {
    // width:100px;
    background: red;
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .cityWrapper {
    padding-top:45px;
    height: 100%;
    background: green;
    // overflow: hidden;
  }
}
</style>