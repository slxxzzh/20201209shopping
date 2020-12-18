<template>
  <div class="evaluate">
    <van-nav-bar
      title="商品评价"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div v-if="shopData" class="rateDiv">
      <img :src="shopData.image_path" alt="" />
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
      <van-checkbox v-model="checked">匿名评价</van-checkbox>
      <van-button type="primary" block @click="evaluate">立即评价</van-button>
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
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      checked: false, // 匿名评价
    };
  },
  components: {},
  methods: {
    evaluate(){
      // id: 商品cid
    // rate: 分数
    // content: 内容
    // anonymous: 是否匿名 
    // _id: 商品的_id
    // order_id: 商品的order_id
    // image: []
    let image = []
    this.fileList.map(item=>{
      image.push(item.content)
    })
      this.$api.evaluate({
        id:this.shopData.cid,
        rate:this.value,
        content:this.message,
        anonymous:this.checked,
        _id:this.shopData._id,
        order_id:this.shopData.order_id,
        image:[]
      }).then(res=>{
        this.$Toast.success(res.msg)
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.shopData = JSON.parse(this.$route.query.id);
    console.log(this.shopData);
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
  .van-checkbox {
    margin-top: 10px;
  }
  .van-button{
    margin-top: 20px;
  }
}
</style>
