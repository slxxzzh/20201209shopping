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
  color:red;
  span{
    width:20px;
    height:20px;
    display: inline-block;
    border-radius: 10px;
    background:red;
    color:white;
  }
}
</style>