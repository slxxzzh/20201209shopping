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
    padding:10px;
    box-sizing: border-box;
    background: white;
  }
  img{
      width:100%;
  }
  p {
    color: rgb(224, 50, 43);
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    text-overflow: ellipsis;
    margin:5px 0;
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
