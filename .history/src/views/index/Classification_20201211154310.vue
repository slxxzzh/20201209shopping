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
          <van-sidebar-item title="新鲜水果" />
          <van-sidebar-item title="中外名酒" />
          <van-sidebar-item title="营养奶品" />
          <van-sidebar-item title="食品饮料" />
          <van-sidebar-item title="个人护理" />
        </van-sidebar>
        <van-tabs v-model="active">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
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
      activeKey: 1,
      active: 2,
      id:"2c9f6c946016ea9b016016f79c8e0000"
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      // 返回
      history.go(-1);
    },
    getClassification(id){
      // 获取分类查询数据
      this.$api.classification(123123).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    // console.log(this.id);
    this.getClassification(this.id)
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.classification {
  display: flex;
  .van-sidebar{
    width:190px;
    background:rgb(241,248,255);
    height:100vh;
  }
  .van-tabs {
    width:100vh;
    order: 1;
  }
}
</style>
