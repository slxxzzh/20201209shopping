<template>
  <div class="login">
    <van-nav-bar
      title="登录 / 注册"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form validate-first @failed="onFailed" @submit="onSubmit">
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
        v-model="shortMessage"
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
        v-model="verifyValue"
        name="verification2"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '' }]"
      >
        <template #button>
          <span v-html="verify" @click="getVerify"></span>
        </template>
      </van-field>
      <div class="loginBtn">
        <!-- <van-button round block type="info" native-type="submit">
          提交
        </van-button> -->
        <van-button color="rgb(7,193,96)" @click="sSubmit(1)">登录</van-button>
        <van-button color="rgb(255,68,68)" @click="sSubmit(2)">注册</van-button>
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
      username: "", // 用户名
      pwd: "", // 密码
      phone: "", // 手机号
      verifyValue: "", // 验证码
      shortMessage: "", // 短信验证码
      verify: "", // 验证码图片
      loginOrRegister: -1, // 1-登录 2-注册
    };
  },
  components: {},
  methods: {
    // 返回
    onClickLeft() {
      history.go(-1);
    },
    // 获取验证码
    getVerify() {
      this.$api
        .getVerify()
        .then((res) => {
          this.verify = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 登录
    sLogin() {
      this.$api
        .login({
          nickname: this.username,
          password: this.pwd,
          verify: this.verifyValue,
        })
        .then((res) => {
          if (res.code !== 200) {
            this.$Toast.fail(res.msg);
            this.verifyValue = "";
            this.getVerify();
          } else {
            this.$Toast.success("登录成功");
            // 存localStorage
            localStorage.setItem("user", res.userInfo);
            $router.push({
              name: "Index",
            });
          }
        })
        .catch((err) => {
          this.$Toast.fail(err);
        });
    },
    // 注册
    Sregister() {
      this.$api
        .register({
          nickname: this.username,
          password: this.pwd,
          verify: this.verifyValue,
        })
        .then((res) => {
          if (res.code !== 200) {
            this.$Toast.fail(res.msg);
            this.verifyValue = "";
            this.getVerify();
          } else {
            this.$Toast.success("注册成功");
            // 存localStorage
            localStorage.setItem("user", res.userInfo);
            $router.push({
              name: "Index",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sSubmit(v) {
      this.loginOrRegister = v;
    },
    // 验证失败
    onFailed(errorInfo) {
      this.$Toast.fail("请填写完整信息");
    },
    // 验证成功
    onSubmit(v) {
      if (this.loginOrRegister === 1) {
        // 登录
        this.sLogin();
      } else {
        // 注册
        this.Sregister();
      }
    },
  },
  mounted() {
    // 获取验证码
    this.getVerify();
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
.van-cell__title {
  line-height: 47px;
}
.shortInput {
  input {
    width: 100px;
  }
}
.loginBtn {
  text-align: left;
  margin-top: 16px;
  .van-button {
    width: 80px;
    margin: 0 15px;
    margin-right: 0px;
  }
}
</style>
