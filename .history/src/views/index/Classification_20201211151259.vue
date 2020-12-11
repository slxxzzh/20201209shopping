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
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      history.go(-1);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.classification {
  display: flex;
  .van-tabs {
    order: 1;
  }
}
</style>
