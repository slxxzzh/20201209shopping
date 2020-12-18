<template>
  <div>
      <van-nav-bar
        title="商品评价"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
      <div>
        <img src="" alt="">
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