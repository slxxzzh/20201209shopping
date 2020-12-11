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
            <div v-for="item2 in showData" :key="item2.id">
              {{ item2.name }}
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
      id: "2c9f6c946016ea9b016016f79c8e0000",
      showData: [], // 展示数据
      tabData: [], // 标签数据
      allData: [], // 所有数据
    };
  },
  components: {},
  methods: {
    changeTab(id) {
      // 点击改变tab
      let d = this.allData.filter((item) => {
        return item.mallCategoryId === id;
      });
      this.tabData = d[0].bxMallSubDto;
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
          console.log("分页数据：");
          console.log(res.dataList);
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
          this.changeTab("1");
          console.log("全部数据：");
          console.log(res.data.category);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    // console.log(this.id);
    this.getAllData();
    this.getClassification(this.id);
  },
  computed: {},
  watch: {
    active(v) {
      // 获取展示数据
      this.getClassification(
        this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
      );
    },
    activeKey(v) {
      this.active = 0;
      // 获取展示数据
      this.getClassification(
        this.allData[this.activeKey].bxMallSubDto[this.active].mallSubId
      );
    },
  },
};
</script>

<style lang="scss" scoped>
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
  }
}
</style>
