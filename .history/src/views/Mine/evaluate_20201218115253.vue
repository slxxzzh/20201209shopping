<template>
  <div>
      <van-nav-bar
        title="商品评价"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div>
        <img :src="shopData.order_list[0].image_path" alt="">
        <div>
          商品评分：
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

</style>