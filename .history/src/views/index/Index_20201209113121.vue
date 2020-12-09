<template>
  <div class="wrapper">
    <div class="wrapperContent">
      首页
      <br />
      首页 <br />
      首页 <br />
      首页 <br />
      首页 <br />
      首页
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
    this.$api.login(s,p).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>