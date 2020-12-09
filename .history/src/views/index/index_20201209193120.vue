<template>
  <div>
    <Sheader></Sheader>
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
  </div>
</template>

<script>
import Sheader from "../../components/header";
export default {
  name: "",
  props: {},
  data() {
    return {
      slides:-1 // 轮播图数据
    };
  },
  components: {
    Sheader,
  },
  methods: {},
  mounted() {
    this.$api
      .getIndexData()
      .then((res) => {
        if (res.code === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    this.$nextTick(() => {
      let bs = new this.$Scroll(".wrapper", {
        scrollX: true,
        click: true,
      });
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.wrapperContent {
  padding-top: 60px;
  padding-bottom: 50px;
}
</style>
