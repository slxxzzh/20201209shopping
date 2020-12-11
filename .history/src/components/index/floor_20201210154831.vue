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
    width:20px;
    height:20px;
    display: inline-block;
    font-size: 12px;
    border-radius: 10px;
    background:red;
    color:white;
    line-height: 20px;
    text-align: center;
  }
}
</style>