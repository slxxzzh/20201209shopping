<template>
  <div class="login">
    <van-nav-bar
      title="登录 / 注册"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    onClickLeft(){
      history.go(-1)
    }
  },
  mounted() {
    
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
  .login{
    height:100vh;
    background:url("../assets/timg.jpg");
    background-repeat: no-repeat;
  }
</style>
