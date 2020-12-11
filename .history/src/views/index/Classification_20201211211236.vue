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
                <div v-for="item2 in showData" :key="item2.id">
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
      bs: null, // 滚动条对象
    };
  },
  components: {},
  methods: {
    changeTab(id) {
      this.active = 0;
      // 点击改变tab
      let d = this.allData.filter((item) => {
        return item.mallCategoryId === id;
      });
      this.tabData = d[0].bxMallSubDto;
      setTimeout(() => {
        this.getClassification(
          this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
        );
      }, 0);
    },
    onClickLeft() {
      // 返回
      history.go(-1);
    },
    getClassification(id) {
      // 获取分类查询数据
      this.$api
        .classification(id)
        .then((res) => {
          this.showData = res.dataList;
          setTimeout(() => {
            let w = document.getElementsByClassName("wrapper2");
            Array.from(w).map((item) => {
              this.bs = new this.$Scroll(item, {
                scrollX: true,
                click: true,
              });
              this.bs.refresh();
            });
          }, 100);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllData() {
      // 获取所有数据
      this.$api
        .getIndexData()
        .then((res) => {
          this.allData = res.data.category;
          this.changeTab(`${this.activeKey + 1}`);
          // 获取展示数据
          this.getClassification(
            this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getAllData();
    // this.getClassification(this.id);
  },
  computed: {},
  watch: {
    active: {
      handler(v) {
        // 获取展示数据
        this.getClassification(
          this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
        );
      },
      deep: true,
      immediate: false,
    },
    // activeKey: {
    //   handler(v) {
    //     // 获取展示数据
    //     this.getClassification(
    //       this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
    //     );
    //   },
    //   deep: true,
    //   immediate: false,
    // },
    showData: {
      handler() {},
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper2 {
  height: 100vh;
  .wrapperContent{
     padding-bottom: 200px;
  }
}
.classification {
  display: flex;
  justify-content: space-between;
  .van-sidebar {
    flex-shrink: 0;
    width: 100px;
    background: rgb(241, 248, 255);
    height: 100vh;
  }
  .van-tabs {
    flex-grow: 1;
    width: 70vw;
    .van-tab {
      background: red;
    }
    img {
      width: 100px;
    }
  }
}
</style>
