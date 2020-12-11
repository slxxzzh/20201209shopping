<template>
  <div>
    <h1 class="floorTitle">
      <span>{{ shopData.floor }}F</span>
      {{ shopData.title }}
    </h1>
    <img v-for="(item,index) in shopData.data" :key="index" :src="item" alt="">
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shopData: {
      type: Object,
    },
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
.floorTitle {
  font-weight: normal;

  font-size: 16px;
  color: rgb(224, 50, 43);
  span {
    width: 22px;
    height: 22px;
    display: inline-block;
    font-size: 14px;
    border-radius: 30px;
    background: rgb(224, 50, 43);
    color: white;
    line-height: 24px;
    text-align: center;
  }
}
</style>
