<template>
  <div>
    <slot name="title"></slot>
    <div class="hotGoodsDiv">
        <div>
            <img src="" alt="">
            <p></p>
            <span>￥3.0</span><i>￥2.0</i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
  font-size: 16px;
  color: rgb(224, 50, 43);
}
</style>
