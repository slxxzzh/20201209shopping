<template>
  <div id="app" class="wrapper" ref="wrapper">
    <ul>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
      <li>444</li>
    </ul>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      let bs = new BScroll(this.$refs.wrapper, {
        click: true,
      });
    });
  },
  computed: {},
  watch: {},
};
</script>
<style lang="scss">
body,
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  border: 1px solid red;
  overflow: hidden;
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
