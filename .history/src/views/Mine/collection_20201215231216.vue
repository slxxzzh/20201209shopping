<template>
  <div>
    <van-nav-bar
      title="我的收藏"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
      <li>
        {{ item.name }}
      </li>
      <van-card
       v-for="item in listData" :key="item.cid"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      listData: [],
    };
  },
  components: {},
  methods: {
    getCollection() {
      this.$api
        .getCollection()
        .then((res) => {
          this.listData = res.data.list;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCollection();
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
