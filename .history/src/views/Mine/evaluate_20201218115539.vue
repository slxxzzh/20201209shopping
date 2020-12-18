<template>
  <div>
      <van-nav-bar
        title="商品评价"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div v-if="shopData" class="rateDiv">
        <img :src="shopData.order_list[0].image_path" alt="">
        <div>
          商品评分：<br>
          <van-rate v-model="value" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      shopData:null,
      value:5,
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.shopData = JSON.parse(this.$route.query.id)
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.rateDiv{
  display:flex;
  justify-content: start;
  img{
    width:100px
  }
}
</style>