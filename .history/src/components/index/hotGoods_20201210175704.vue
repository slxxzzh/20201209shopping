<template>
  <div>
    <slot name="title"></slot>
    <div class="hotGoodsDiv">
      <div v-for="item in hotGoodsData" :key="item.goodsId">
        <img :src="item.image" alt="" />
        <p>{{item.name}}</p>
        <span>￥{{item.price}}</span><i>￥{{item.mallPrice}}</i>
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
  flex-wrap: wrap;
  div {
    width: 50%;
    background: white;
  }
  img{
      width:100%;
  }
  p {
    color: rgb(224, 50, 43);
    overflow: hidden;
    white-space: nowrap;
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
