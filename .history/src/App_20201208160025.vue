<template>
  <div id="app" key="" class="wrapper" ref="wrapper">
    <div class="content">
      首页的内容

      <button @click="fn">点击更新</button>
      <router-view />
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      r: null,
    };
  },
  components: {},
  methods: {
    fn() {
      this.r.refresh();
    },
  },
  mounted() {
    const a = axios.create({
      baseURL: "/api",
      timeout: 10000,
    });
    a.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        err.response && err.response.status;
        if (status === 400) {
          Toast.fail("参数错误");
        }
        if (status === 401) {
          Toast.fail("没有权限");
        }
        if (status === 403) {
          Toast.fail("登录过期");
        }
        if (status === 404) {
          Toast.fail("路径错误");
        }
        if (status === 500) {
          Toast.fail("服务器出错");
        } else {
          Toast.fail("未知错误：" + status);
        }
      }
    );
    // console.log(a);
    a.post("login").then(
      res =>{
        console.log(res);
      }
    ).catch()
    this.$api.login({
      username: "123",
      password: "123",
    });
    // .then(res=>{
    //   console.log(red);
    // }).catch(err=>{
    //   console.log(err);
    // })
    this.$nextTick(() => {
      let bs = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        click: true,
      });
      this.r = bs;
      // console.log(this.$store);
      this.$store.commit("set_wrapper", bs);
    });
  },
  computed: {},
  watch: {
    //   r(v){
    //       v.refresh();
    //     //   console.log(v);
    //   },
    // r: {
    //   handler(v) {
    //     console.log(v);
    //   },
    //   deep: true,
    // },
  },
};
</script>
<style lang="scss">
body,
html {
  height: 100%;
}
.wrapper {
  height: 80%;
  overflow: hidden;
  .content {
    overflow: auto;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
