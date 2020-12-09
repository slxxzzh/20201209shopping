<template>
  <div class="">
    <van-search
      v-model="value"
      :label="address"
      @focus="onSearch"
      @blur="closeSearch"
      placeholder="请输入搜索关键词"
    >
    </van-search>
    <!-- 商品搜索弹框 -->
    <van-popup
      v-model="show2"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <div class="searchDiv">
        <!-- <p class="searchHint">暂无搜索内容</p> -->
        <p class="searchHint">共{{ searchNumber }}条</p>
        <div class="searchItem" v-for="item in searchList" :key="item.id" @click="showItem(item.name)">
          <div>
            <img :src="item.image" alt="" />
          </div>
          <div>
            <p>{{ item.name.replace(value, lineHight) }}</p>
            <span>￥{{ item.present_price }}</span
            ><i>{{ item.orl_price }}</i>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 城市搜索弹框 -->
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
      <!-- 搜索城市的内容div -->
      <div class="searchCity" v-if="cityValue.length !== 0">
        <p
          v-for="(item, index) in searchCity"
          :key="index"
          @click="replaceCity(item)"
        >
          {{ item }}
        </p>
      </div>
      <!-- 展示城市的内容div -->
      <div class="Cwrapper" v-if="cityValue.length === 0">
        <div class="CwrapperContent">
          <van-cell-group title="当前城市">
            <van-cell>
              <span @click="replaceCity(address)" class="citySpan">{{
                this.address
              }}</span>
            </van-cell>
          </van-cell-group>
          <van-cell-group left title="热门城市">
            <van-cell>
              <span
                @click="replaceCity(item.name)"
                v-for="item in hotCities"
                :key="item.id"
                class="citySpan"
                >{{ item.name }}</span
              >
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
      value: "", // 搜索商品的值
      show: false, // 搜索城市弹框的显示
      show2: true, // 搜索弹框商品的显示
      address: "定位中..", // 城市名
      cityValue: "", // 搜索的值
      hotCities: [], // 热门城市
      cities: [], // 显示的城市
      searchCity: [], // 搜索的城市的数组
      searchNumber: 0, // 搜索出来的商品总量
      searchList: [], // 搜索的数据
    };
  },
  components: {},
  methods: {
    showItem(name){
      this.$Toast(name)
    },
    replaceCity(cityname) {
      // 点击替换城市名
      this.address = cityname;
      this.show = false;
    },
    onSearch() {
      this.show2 = true;
    },
    closeSearch() {
      
      // this.show2 = false;
    },
  },
  mounted() {
    // 引入拼音插件
    this.PinyinMatch = require("pinyin-match");
    // 把城市data赋值
    this.hotCities = city.data.hotCities;
    this.cities = city.data.cities;
    // 搜索框绑定展示和隐藏
    document
      .getElementsByClassName("van-search__label")[0]
      .addEventListener("click", () => {
        this.show = true;
        setTimeout(() => {
          document
            .getElementsByClassName("van-cell__left-icon")[0]
            .addEventListener("click", () => {
              this.show = false;
            });
        }, 0);
      });

    // 高德地图获取定位
    let _this = this;
    function mapApi() {
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
          if (_this.address === "定位中..") {
            _this.address = data.addressComponent.city;
          }
        }

        function onError(data) {
          console.log(data);
          // 定位出错
        }
      });
    }
    mapApi();
  },
  computed: {
    lineHight(){
      return `<b style="color:red">${this.value}</b>`
    }
  },
  watch: {
    // 搜索城市
    cityValue(v) {
      this.searchCity = [];
      for (let item in city.data.cities) {
        city.data.cities[item].map((i) => {
          if (v.trim() !== "" && this.PinyinMatch.match(i.name, v)) {
            console.log(`找到了${i.name}`);
            this.searchCity.push(i.name);
          }
        });
      }
    },
    // 搜索商品
    value(v) {
      this.$api
        .search({
          value: v,
        })
        .then((res) => {
          this.searchNumber = res.data.count;
          this.searchList = res.data.list;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(v);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  // height: 100%;
  .van-search {
    width: 100%;
    z-index: 9999;
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
  .searchCity {
    padding-top: 98px;
    box-sizing: border-box;
    height: 100%;
    background: white;
    p {
      padding: 7px 44px;
      margin: 0;
      // border-bottom:1px solid #ccc;
      font-size: 13px;
      text-align: left;
    }
  }
  .searchDiv {
    padding-top: 54px;
    box-sizing: border-box;
    .searchHint {
      font-size: 12px;
      margin: 5px 0;
    }
    .searchItem {
      display: flex;
      justify-content: space-between;
      // border: 1px solid red;
      background: white;
      padding: 10px;
      box-sizing: border-box;
      text-align: left;
      p {
        width: 260px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
      }
      img {
        width: 80px;
      }
      span {
        color: red;
        font-weight: 900;
        font-size: 14px;
      }
      i {
        color: #999;
        text-decoration: line-through;
        font-size: 14px;
        margin-left: 10px;
      }
    }
  }
}
</style>
