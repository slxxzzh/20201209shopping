<template>
  <div>
      <van-nav-bar
        title="会员中心"
        left-text=""
        left-arrow
        @click-left="back"
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
  methods: {
    //   onClickLeft(){
    //       alert(">>")
    //   }
  },
  mounted() {
      console.log(this.back);
    this.back
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>