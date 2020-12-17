<template>
  <div class="collection">
    <van-nav-bar
      title="我的收藏"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <li>
        {{ item.name }}
      </li> -->
    <div class="wrapper">
      <div class="wrapperContent">
        <van-card
          v-for="item in listData"
          :key="item.cid"
          :price="item.present_price"
          :title="item.name"
          :thumb="item.image_path"
        >
          <template #footer>
            <van-icon @click="delCollection(item.cid)" name="close" />
          </template>
        </van-card>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      listData: [],
      bs: null
    };
  },
  components: {},
  methods: {
    // 删除收藏
    delCollection(id) {
      let _this = this;
      function beforeClose(action, done) {
        if (action === "confirm") {
          this.$api
            .cancelCollection({ id })
            .then(res => {
              _this.$Toast.success(res.msg);
              _this.getCollection();
              done();
            })
            .catch(err => {
              done();
            });
        } else {
          done();
        }
      }
      Dialog.confirm({
        title: "确认",
        message: "删除收藏？",
        beforeClose
      });
    },
    // 获取收藏
    getCollection() {
      console.log(666);
      this.$api
        .getCollection()
        .then(res => {
          this.listData = res.data.list;
          this.$Toast.clear();
          setTimeout(() => {
            this.bs.refresh();
          }, 0);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$Toast.loading();
    this.getCollection();
    this.$nextTick(() => {
      this.bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true
      });
    });
  },
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.collection{
  height: 100vh;
  overflow: hidden;
}
.wrapper {
  height: 100vh;
  overflow: hidden;
  .wrapperContent {
    padding-bottom: 46px;
  }
}
.van-card {
  margin-top: 0;
  text-align: left;
  .van-image {
    box-shadow: 0 0 3px #ccc;
  }
  .van-card__content {
    padding-left: 10px;
  }
  .van-card__title {
    font-size: 14px;
  }
  .van-card__price {
    margin-top: -20px;
    font-size: 14px;
    color: red;
    font-weight: 600;
  }
  .van-card__footer {
    margin-top: -20px;
    i {
      font-size: 18px;
    }
  }
}
</style>
