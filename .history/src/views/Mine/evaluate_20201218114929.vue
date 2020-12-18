<template>
  <div>
      <van-nav-bar
        title="商品评价"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.route.$query.id);
    
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>