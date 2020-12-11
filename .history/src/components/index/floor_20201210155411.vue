<template>
  <div>
    <slot name="title"></slot>
    
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    shopData:{
      type:Array
    }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.floorTitle{

  font-size: 14px;
  color:red;
  span{
    width:28px;
    height:28px;
    display: inline-block;
    font-size: 14px;
    border-radius: 30px;
    background:red;
    color:white;
    line-height: 30px;
    text-align: center;
    font-weight: normal;
  }
}
</style>