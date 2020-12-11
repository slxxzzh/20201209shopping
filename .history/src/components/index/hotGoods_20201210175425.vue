<template>
  <div>
    <slot name="title"></slot>
    <div class="hotGoodsDiv">
      <div>
        <img src="" alt="" />
        <p></p>
        <span>￥3.0</span><i>￥2.0</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      hotGoodsData:{
          type:Array
      }
  },
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
.hotGoodsDiv {
  display: flex;
  div {
    width: 50%;
    background: white;
  }
  p {
    color: rgb(224, 50, 43);
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    width: 100%;
  }
  span {
    font-weight: 800;
    color: rgb(224, 50, 43);
  }
  i {
    color: #999;
  }
}
</style>
