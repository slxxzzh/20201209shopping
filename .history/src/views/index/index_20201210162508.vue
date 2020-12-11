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
        <!-- 商品推荐(横向滚动) -->
        <div class="recommend">
          <h1>商品推荐</h1>
          <div class="recommendDiv">
            <div class="recommendUl" :style="{ width: recommendWidth }">
              <div
                class="recommendLi"
                v-for="item in recommend"
                :key="item.goodsId"
              >
                <img :src="item.image" alt="" />
                <p>{{ item.goodsName }}</p>
                <span>￥{{ item.price }}</span
                ><i>￥{{ item.mallPrice }}</i
                ><br />
                <button class="shopping">
                  <van-icon name="shopping-cart-o" />
                </button>
                <button>查看详情</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 一楼 -->
        <floor v-for="item in floorData" :key="item.floor" :shopData="item"></floor>
        首页 首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
        首页 <br />
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
import floor from "../../components/index/floor"
import Sheader from "../../components/header";
export default {
  name: "",
  props: {},
  data() {
    return {
      recommendWidth: "",  // 横向滚动宽度
      recommendBs: null, // 横向滚动对象
      indexBs:null, // 首页滚动对象
      slides: [], // 轮播图数据
      category: [], //商品分类数据
      advertesPicture: -1, // 单张图片地址
      recommend: [], // 横向滚动的数据
      floorData:[], // 楼层数据
      
    };
  },
  components: {
    Sheader,
    floor
  },
  methods: {
    // 遍历楼层数据并构造数组
    mapFloorData(floor,floorData){
      Object.keys(floor).map(item=>{
        this.floorData.unshift({"floor":item.slice(item.length-1),"title":floorData.data.floorName[item],"data":floorData.data[item]})
      });
      console.log(this.floorData);
    }
  },
  mounted() {
    this.$api
      .getIndexData()
      .then((res) => {
        if (res.code === 200) {
          this.slides = res.data.slides;
          this.category = res.data.category;
          this.advertesPicture = res.data.advertesPicture.PICTURE_ADDRESS;
          this.recommend = res.data.recommend;
          this.recommendWidth = res.data.recommend.length * 120 + "px";
          this.mapFloorData(res.data.floorName,res)
          setTimeout(() => {
            this.recommendBs.refresh();
            // this.indexBs.refresh();
          }, 0);
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
      let bs2 = new this.$Scroll(".recommendDiv", {
        scrollX: true,
        scrollY: false,
        click: true,
      });
      this.indexBs = bs;
      this.recommendBs = bs2;
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.recommendDiv {
  // height:100px;
  overflow: hidden;
}
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
  .recommendUl {
    height: 200px;
    // width: 200%;
    display: flex;
    justify-content: space-between;
    // overflow-x: scroll;
    // overflow: hidden;
    white-space: nowrap;

    .recommendLi {
      // float: left;
      position: relative;
      box-sizing: border-box;
      padding: 5px 10px;
      font-size: 13px;
      text-align: left;
      width: 35%;
      img {
        display: inline-block;
        margin: 0 auto;
        width: 100px;
      }
      p {
        width: 100px;
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
        margin-top: 6px;
        outline: none;
        border: none;
        background: rgb(255, 76, 56);
        color: white;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        box-sizing: border-box;
        padding: 0 12px;
        font-size: 12px;
        height: 30px;
        i {
          margin-left: 0;
          color: white;
          font-size: 18px;
        }
      }
      button.shopping {
        padding: 0 5px;
        position: relative;
        top: 2px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        background: rgb(254, 202, 58);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }
  }
}
</style>
