<template>
  <div class="login">
    <van-nav-bar
      title="登录 / 注册"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="username"
        label="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="pwd"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ varequired: true, message: '' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: url("../assets/timg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.van-form{
  width:90%;
  box-shadow: 0 0 5px #ccc;
  margin:20px auto 0;
  background:white;
  padding:10px;
  box-sizing: border-box;
}
</style>
