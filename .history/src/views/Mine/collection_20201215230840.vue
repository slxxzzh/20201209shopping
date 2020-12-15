<template>
  <div>
    <van-nav-bar
      title="我的收藏"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
      <li v-for="item in listData" :key="item.cid"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        listData:[]
    };
  },
  components: {},
  methods: {
    getCollection() {
      this.$api
        .getCollection()
        .then((res) => {
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
