<template>
  <div>
    <van-nav-bar
      title="我的收藏"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <li>
        {{ item.name }}
      </li> -->
    <div>
      <van-card
        v-for="item in listData"
        :key="item.cid"
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
      >
        <template #footer>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
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
