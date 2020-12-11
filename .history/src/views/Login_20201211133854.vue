<template>
  <div class="login">
    <van-nav-bar
      title="登录 / 注册"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form validate-first @failed="onFailed">
      <van-field
        v-model="username"
        name="username"
        label="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="pwd"
        name="pwd"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="phone"
        name="phone"
        label="手机号码"
        placeholder="手机号码(仅注册需要)"
      />
      <van-field
        v-model="phone"
        name="verification"
        label="短信验证码"
        placeholder="短信验证码(仅注册需要)"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <van-field
        class="shortInput"
        v-model="phone"
        name="verification2"
        label="验证码"
        placeholder="验证码"
      >
        <template #button>
          <span v-html="verify" @click="getVerify"></span>
        </template>
      </van-field>
      <div class="loginBtn">
        <!-- <van-button round block type="info" native-type="submit">
          提交
        </van-button> -->
        <van-button color="rgb(7,193,96)" @click="sLogin">登录</van-button>
        <van-button color="rgb(255,68,68)" @click="sLogin">注册</van-button>

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
      username: "",
      pwd: "",
      phone: "",
      verify:"",
    };
  },
  components: {},
  methods: {
    // 返回
    onClickLeft() {
      history.go(-1);
    },
    // 获取验证码
    getVerify(){
      this.$api.getVerify().then(res=>{
        this.verify = res
      }).catch(err=>{
        console.log(err);
      })
    },
    // 验证失败
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
  },
  mounted() {
    // 获取验证码
    this.getVerify()
  },
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
.van-form {
  width: 90%;
  box-shadow: 0 0 5px #ccc;
  margin: 20px auto 0;
  background: white;
  padding: 10px 0 20px;
  box-sizing: border-box;
}
.van-cell__title{
  line-height: 47px;
}
.shortInput {
  input {
    width: 100px;
  }
}
.loginBtn{
  text-align: left;
  margin-top: 16px;
  .van-button{
    width:80px;
    margin: 0 15px;
    margin-right: 0px;
  }
}
</style>
