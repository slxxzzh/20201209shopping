<template>
  <div class="evaluate">
    <van-nav-bar
      title="商品评价"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div v-if="shopData" class="rateDiv">
      <img :src="shopData.order_list[0].image_path" alt="" />
      <div>
        商品评分：<br />
        <van-rate v-model="value" />
      </div>
    </div>
    <van-field
      v-model="message"
      rows="3"
      autosize
      type="textarea"
      maxlength="100"
      placeholder="说说你的购买感受吧"
      show-word-limit
    />
    <div class="imgUpload">
      <van-uploader v-model="fileList" multiple :max-count="5" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      shopData: null, // 商品信息
      value: 5, // 评分
      message: "", // 评价（文字）
      fileList: [
        // 上传图片
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true },
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.shopData = JSON.parse(this.$route.query.id);
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.evaluate {
  text-align: left;
}
.rateDiv {
  display: flex;
  text-align: left;
  justify-content: start;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  img {
    width: 100px;
    margin-right: 20px;
    border: 1px solid #eee;
  }
  .van-rate {
    margin: 20px 0;
  }
}
.imgUpload {
  padding: 0 10px;
  box-sizing: border-box;
  .van-uploader__preview {
    .van-image {
      width: 20px;
    }
  }
}
</style>
