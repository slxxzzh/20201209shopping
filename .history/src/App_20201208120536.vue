<template>
  <div id="app" class="wrapper" ref="search">
    <router-view/>
  </div>
</template>
<script>
// import BScroll from 'better-scroll'
 
// const bs = new BScroll('.wrapper', {
//   pullUpLoad: true,
//   scrollbar: true,
//   pullDownRefresh: true
//   // and so on
// })
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
     this.scroll = new BScroll(this.$refs.search)
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
