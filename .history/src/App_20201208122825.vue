<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

import BScroll from "@better-scroll/core";
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
     this.$nextTick(() => {
      let bs = new BScroll(this.$refs.wrapper, {
        click: true,
      });
    });
  },
  computed: {},
  watch: {}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  border:1px solid red
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
