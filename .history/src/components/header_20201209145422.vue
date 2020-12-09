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
      <van-search
        style="top:44px"
        v-model="cityValue"
        placeholder="请输入搜索关键词"
      />

      <div class="Cwrapper">
        <div class="CwrapperContent">
          <van-cell-group title="当前城市">
            <van-cell>
              <span class="citySpan">{{ this.address }}</span>
            </van-cell>
          </van-cell-group>
          <van-cell-group left title="热门城市">
            <van-cell>
              <span v-for="item in hotCities" :key="item.id" class="citySpan">{{
                item.name
              }}</span>
            </van-cell>
          </van-cell-group>
          <van-index-bar>
            <div v-for="(value, key, index) in cities" :key="index">
              <van-index-anchor :index="key" />
              <van-cell
                v-for="item in value"
                :key="item.id"
                :title="item.name"
                @click="replaceCity(item.name)"
              />
              <!-- <van-cell title="文本2" />
              <van-cell title="文本3" /> -->
            </div>
        
          </van-index-bar>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import city from "../assets/city.js";
export default {
  name: "",
  props: {},
  data() {
    return {
      value:"",
      show: true,
      address: "定位中..",
      cityValue: "",
      bs: null,
      hotCities: [],
      cities: [],
    };
  },
  components: {},
  methods: {
    replaceCity(cityname){ // 点击替换城市名
      this.address = cityname
      this.show = false
    },
    onSearch() {},
  },
  mounted() {
    this.hotCities = city.data.hotCities;
    this.cities = city.data.cities;
    document
      .getElementsByClassName("van-search__label")[0]
      .addEventListener("click", () => {
        this.show = true;
      });
    document
      .getElementsByClassName("van-cell__left-icon")[0]
      .addEventListener("click", () => {
        this.show = false;
      });

    let _this = this;
    let amap = new AMap.Map("container", {
      resizeEnable: true,
    });
    AMap.plugin("AMap.Geolocation", function() {
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
  computed: {
   
  },
  watch: {
     cityValue(v){
      console.log(v);
      for(let item in city.data.cities){
        city.data.cities[item].map(i=>{
          if(i.name = v){
            alert()
          }
          // console.log();
        })
        // console.log();
        
        // console.log(item);
      }
      // .map(item=>{
      //   console.log(item);
      // })
      // city.data
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  // height: 100%;
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
  .van-index-bar {
    overflow: auto;
  }
  .cityTitle {
    // width:100px;
    // background: red;
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .Cwrapper {
    height: 100%;
    overflow: hidden;
    padding-top: 94px;
    box-sizing: border-box;
    // height: 100%;
    // background: green;
    // overflow: auto;
    .CwrapperContent {
      overflow: auto;
      // overflow: hidden;
      height: 100%;
      .van-search {
      }
    }
  }
  .van-popup {
    background: rgb(242, 242, 242);
  }

  .van-cell__value {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span {
      width: 90px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      border: 1px solid #999;
      font-size: 12px;
      display: inline-block;
      margin: 6px 5px;
    }
  }
  .van-cell-group__title {
    text-align: left;
  }
}
</style>
