<template>
  <div id="app">
    <div></div>
      <router-view />
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
    };
  },
  components: {},
  methods: {
    fn() {
      this.r.refresh();
    },
  },
  mounted() {
    
  },
  computed: {},
  watch: {
  },
};
</script>
<style lang="scss">
body,
html,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
