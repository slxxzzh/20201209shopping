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
    this.$nextTick(() => {
      let bs = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        click: true,
      });
      this.r = bs;
    });
    setTimeout(() => {
        console.log(123);
        this.r.refresh();
    }, 4000);
    // console.log(this.r);
    //  this.r.refresh();
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
