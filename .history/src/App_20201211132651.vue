<template>
  <div id="app">
      <router-view />
  </div>
</template>
<script>
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
  },
  mounted() {
    
  },
  computed: {},
  watch: {
  },
};
</script>
<style lang="scss">
@import "./assets/index";
body,
html{
  height: 100%;
}
* { touch-action: none; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.wrapper {
  // height:100%;
  // overflow: hidden;
}
</style>
