<template>
  <div class="wrapper">
    <div class="wrapperContent">
      <van-nav-bar
        title="商品分类"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="classification">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="item in allData"
            :key="item.mallCategoryId"
            :title="item.mallCategoryName"
            @click="changeTab(item.mallCategoryId)"
          />
        </van-sidebar>
        <van-tabs v-model="active">
          <van-tab
            v-for="item in tabData"
            :key="item.mallSubId"
            :title="item.mallSubName"
            @click="getShowData(item.mallSubId)"
          >
            <div class="wrapper2">
              <div class="wrapperContent">
                <van-empty v-if="showData.length===0" description="空空如也" />
                <div v-for="item2 in showData" :key="item2.id" class="mallItem">
                  <div><img :src="item2.image" alt="" /></div>
                  <div>
                    <p>{{ item2.name }}</p>
                    <span>￥{{ item2.present_price }}</span
                    ><i>￥{{ item2.orl_price }}</i>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeKey: 0, // 左
      active: 0, // 上
      id: "",
      showData: [], // 展示数据
      tabData: [], // 标签数据
      allData: [], // 所有数据
      bs: null // 滚动条对象
    };
  },
  components: {},
  methods: {
    changeTab(id) {
      this.active = 0;
      // 点击改变tab
      let d = this.allData.filter(item => {
        return item.mallCategoryId === id;
      });
      this.tabData = d[0].bxMallSubDto;
      setTimeout(() => {
        this.getClassification(
          this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
        );
      }, 0);
    },
    getClassification(id) {
      // 获取分类查询数据
      this.$api
        .classification(id)
        .then(res => {
          this.showData = res.dataList;
          let w = document.getElementsByClassName("wrapper2");
          this.$Toast.clear();
          // console.log(this.active);
          setTimeout(() => {
            Array.from(w).map(item => {
              this.bs = new this.$Scroll(item, {
                scrollX: true,
                click: true
              });
              this.bs.refresh();
            });
          }, 100);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllData() {
      // 获取所有数据
      this.$api
        .getIndexData()
        .then(res => {
          this.allData = res.data.category;
          this.changeTab(`${parseInt(this.activeKey) + 1}`);
          // 获取展示数据
          // this.getClassification(
          //   this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
          // );
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$Toast.loading();
    this.activeKey = this.$route.query.activeKey || 0;
    this.getAllData();
  },
  computed: {},
  watch: {
    active: {
      handler(v) {
        this.$Toast.loading();
        // 获取展示数据
        this.getClassification(
          this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
        );
      },
      deep: true,
      immediate: false
    },
    activeKey: {
      handler(v) {
        this.$Toast.loading();
        // 获取展示数据
        // this.getClassification(
        //   this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
        // );
      },
      deep: true,
      immediate: false
    },
    showData: {
      handler() {},
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.van-sidebar-item {
  padding: 16px 0;
}
.wrapper2 {
  height: 100vh;
  .wrapperContent {
    padding-bottom: 150px;
  }
}
.classification {
  display: flex;
  justify-content: space-between;
  .van-sidebar {
    flex-shrink: 0;
    width: 22vw;
    background: rgb(241, 248, 255);
    height: 100vh;
  }
  .van-tabs {
    flex-grow: 1;
    width: 78vw;
    .mallItem {
      height: 90px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      text-align: left;
      border-bottom: 1px solid #eee;
      img {
        border: 1px solid #eee;
        width: 70px;
      }
      p {
        font-size: 14px;
        margin: 0px 10px 10px;
        text-align: left;
        width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgb(255, 0, 0);
      }
      span {
        display: inline-block;
        margin: 10px;
        margin-right: 5px;
        font-size: 14px;
        color: rgb(255, 0, 0);
        font-weight: 900;
      }
      i {
        font-size: 14px;
        text-decoration: line-through;
      }
    }
  }
}
</style>
